import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image, Menu } from "semantic-ui-react";
import logo from "../assets/images/logo.22f8373f.jpg";

export const Logo = observer(() => {
  return (
    <>
      <div className="logo-wrapper">
        <div className="logo-container">
          <div className="logo-image">
            <Image src={logo} fluid />
          </div>
        </div>
        <div className="logo-frame"></div>
      </div>
      <div className="nav-container">
        <Menu text compact className="nav-menu">
          <Menu.Item
            name="features"
            // active={activeItem === "features"}
            // onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            // active={activeItem === "testimonials"}
            // onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            // active={activeItem === "sign-in"}
            // onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
});
