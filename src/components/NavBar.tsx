import * as React from "react";
import { observer } from "mobx-react-lite";
import { Menu } from "semantic-ui-react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const NavBar = withRouter(
  observer(({ location: { pathname }, history }: RouteComponentProps) => {
    return (
      <div className="nav-container">
        <Menu text compact icon className="nav-menu">
          <Menu.Item
            className="nav-menu-item"
            name="home"
            active={pathname.length === 1}
            onClick={() => history.push("/")}
          >
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <span className="divider"></span>
          <Menu.Item
            className="nav-menu-item"
            name="catalog"
            active={pathname.indexOf('catalog') !== -1}
            onClick={() => history.push("catalog")}
          >
            <Link to={"/catalog"}>Catalog</Link>
          </Menu.Item>
          <span className="divider"></span>
          <Menu.Item
            className="nav-menu-item"
            name="contacts"
            active={pathname.indexOf('contacts') !== -1}
            onClick={() => history.push("contacts")}
          >
            <Link to={"/contacts"}>Contacts</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  })
);
