const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const logger = require("koa-logger");
const cors = require("koa-cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const httpStatus = require("http-status");


const app = new Koa();
const router = new Router();
const static_pages = new Koa();
const PORT = process.env.PORT || 8080;

static_pages.use(serve("./build"));
app.use( async () => mount("/", static_pages));
app.use(bodyParser());
app.use(logger());
app.use(cors());

router.get("/products", async (ctx: { status: any; body: string[]; }, next: () => any) => {
  const products = [
    "Speaking javascript",
    "Fluent Python",
    "Pro Python",
    "The Go programming language",
    "Test Book 7",
  ];
  ctx.status = httpStatus.OK;
  ctx.body = products;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});

export {};
