import * as React from "react";
import { observer } from "mobx-react-lite";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const NavBar = observer(() => {
  const [active, setActive] = React.useState('home');

  return (
    <div className="nav-container">
      <Menu text compact icon className="nav-menu">
        <Menu.Item
          className="nav-menu-item"
          name="home"
          active={active === "home"}
          onClick={() => setActive('home')}
        >
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <span className="divider"></span>
        <Menu.Item
          className="nav-menu-item"
          name="catalog"
          active={active === "catalog"}
          onClick={() => setActive('catalog')}
        >
          <Link to={"/catalog"}>Catalog</Link>
        </Menu.Item>
        <span className="divider"></span>
        {/* <Dropdown text="Catalog" pointing="top" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={"/"}>#bomberjacket</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/"}>#oversizejacket</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Menu.Item
          className="nav-menu-item"
          name="contacts"
          active={active === "contacts"}
          onClick={() => setActive('contacts')}
        >
          <Link to={"/contacts"}>Contacts</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
});
