import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Header,
  Transition,
  Icon,
  Menu,
  Button,
  Item,
} from "semantic-ui-react";
import product1 from "../assets/images/products/1.jpg";
import product2 from "../assets/images/products/2.jpg";
import { Link } from "react-router-dom";
import { LabelType, InfoLabel } from "./InfoLabel";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface CatalogItemProps {
  id: string;
  category: string;
  classNames?: string;
  isPage?: boolean;
  label?: LabelType;
}

export const CatalogItem = observer(
  ({ id, classNames, isPage, category }: CatalogItemProps) => {
    const [isVisible, setVisible] = React.useState(false);
    // const [isLoaded, setLoaded] = React.useState(false);
    const animation = classNames
      ? "fade up"
      : +id % 2 !== 0
      ? "fade right"
      : "fade left";

    React.useEffect(() => {
      window.scrollTo(0, 0);
      setVisible(true);
    }, [isVisible]);

    const subheader = (type: LabelType) => {
      const headersMap = {
        SALE: (
          <Header.Subheader>
            <span style={{ textDecoration: "line-through", marginRight: 4 }}>
              $699
            </span>
            <span style={{ color: "red" }}>$559</span>
          </Header.Subheader>
        ),
        DISCOUNT: (
          <Header.Subheader>
            <span style={{ textDecoration: "line-through", marginRight: 4 }}>
              $699
            </span>
            <span style={{ color: "red" }}>$349</span>
          </Header.Subheader>
        ),
        DEFAULT: <Header.Subheader>$699</Header.Subheader>,
      };

      return headersMap[type] || headersMap.DEFAULT;
    };
    const tempLabel =
      +id === 2 ? "SALE" : +id === 5 ? "NEW" : +id === 7 ? "DISCOUNT" : null;
    return (
      <Transition visible={isVisible} animation={animation} duration={600}>
        <div className={classNames}>
          {/* {!isLoaded && (
            <Placeholder className="catalog-item-image-placeholder">
              <Placeholder.Image />
            </Placeholder>
          )} */}
          <div className="image-wrapper">
            <InfoLabel type={tempLabel} />
            <CarouselProvider
              visibleSlides={1}
              totalSlides={2}
              step={1}
              naturalSlideWidth={1080}
              naturalSlideHeight={1080}
            >
              <Slider>
                <Slide tag="a" index={0}>
                  <ImageWithZoom src={product1} />
                </Slide>
                <Slide tag="b" index={1}>
                  <ImageWithZoom src={product2} />
                </Slide>
              </Slider>
            </CarouselProvider>
            {/* <Image
              src={id !== "1" ? product1 : product2}
              fluid
              onLoad={() => setLoaded(true)}
            /> */}
          </div>

          <Header as={isPage ? "h2" : "h4"} className="catalog-item-header">
            Bicker leather jacket
            <Header.Subheader>{subheader(tempLabel)}</Header.Subheader>
          </Header>

          {isPage && (
            <>
              <Item.Description className="catalog-item-description">
                <p>
                  Eiusmod labore sint sit duis esse consequat anim. Lorem
                  consectetur ullamco nostrud anim est ex Lorem ullamco do
                  pariatur. Labore nostrud id qui proident adipisicing voluptate
                  aliquip Lorem fugiat labore officia sit consectetur. Excepteur
                  sit do proident anim nulla in cupidatat sint pariatur. Sunt
                  enim irure consequat non duis mollit aute duis sit aliquip
                  ullamco.
                </p>
              </Item.Description>

              <Link to={`/catalog/${category}`}>
                <Button fluid basic color="black" className="back-homepage">
                  <Icon name="arrow left" />
                  {`Back to #${category}`}
                </Button>
              </Link>

              <Menu compact fluid text icon="labeled" className="social-menu">
                <Menu.Item
                  name="instagram"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/konstantin.kositskiy"
                    )
                  }
                >
                  <Icon name="instagram" />
                  Like
                </Menu.Item>

                <Menu.Item
                  name="pinterest"
                  onClick={() => window.open("https://www.pinterest.com/")}
                >
                  <Icon name="pinterest" />
                  Pin
                </Menu.Item>

                <Menu.Item
                  name="telegram"
                  onClick={() =>
                    window.open("https://t.me/KonstantinKositskiy")
                  }
                >
                  <Icon name="telegram plane" />
                  Follow
                </Menu.Item>
              </Menu>
            </>
          )}
        </div>
      </Transition>
    );
  }
);
