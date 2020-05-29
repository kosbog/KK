import * as React from "react";
import { observer } from "mobx-react-lite";
import { Menu } from 'semantic-ui-react';

export const NavBar = observer(() => {
  return (
    <div className="nav-container">
      <Menu text compact className="nav-menu">
        <Menu.Item
          name="testimonials"
          // active={activeItem === "testimonials"}
          // onClick={this.handleItemClick}
        >
          Catalog
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          // active={activeItem === "sign-in"}
          // onClick={this.handleItemClick}
        >
          Contacts
        </Menu.Item>
      </Menu>
    </div>
  );
});
