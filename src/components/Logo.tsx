import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image } from "semantic-ui-react";
import logo from "../assets/images/logo.22f8373f.jpg";
import { CustomDivider } from "./Divider";
import { Link } from "react-router-dom";

export const Logo = observer(() => {
  return (
    <>
      <div className="logo-wrapper">
        <div className="logo-container">
          <div className="logo-image">
            <Link to={"/"}>
              <Image src={logo} fluid />
            </Link>
          </div>
        </div>
        <div className="logo-frame"></div>
      </div>
      <CustomDivider />
    </>
  );
});
