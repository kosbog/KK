import * as React from "react";
import { observer } from "mobx-react-lite";
import { Menu, Icon } from "semantic-ui-react";

export const NavBar = observer(() => {
  return (
    <div className="nav-container">
      <Menu text compact icon className="nav-menu">
        <Menu.Item
          name="testimonials"
          // active={activeItem === "testimonials"}
          // onClick={this.handleItemClick}
        >
          <Icon name="facebook" />
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          // active={activeItem === "sign-in"}
          // onClick={this.handleItemClick}
        >
          <Icon name="instagram" />
        </Menu.Item>
      </Menu>
    </div>
  );
});
