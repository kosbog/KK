import * as React from "react";
import { observer } from "mobx-react-lite";
import { Menu, Header } from "semantic-ui-react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const NavBar = withRouter(
  observer(({ location: { pathname }, history }: RouteComponentProps) => {
    const [activeMenu, setActiveMenu] = React.useState("home");
    const catalogMap = [
      "#all",
      "#bikerjacket",
      "#bomberjacket",
      "#oversizejacket",
      "#truckerjacket",
      "#furjacket",
      "#teddyjacket",
      "#suedejacket",
      "#dufflejacket",
    ];

    React.useEffect(() => {
      window.scrollTo(0, 0);
      setActiveMenu("");
    }, [pathname]);

    return (
      <div className="nav-container">
        <Menu text compact icon className="nav-menu">
          <Menu.Item
            as="span"
            className="nav-menu-item"
            name="home"
            active={pathname.length === 1}
            onClick={() => history.push("/")}
          >
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <span className="divider"></span>
          <Menu.Item
            as="span"
            className="nav-menu-item"
            name="catalog"
            active={pathname.indexOf("catalog") !== -1}
            onClick={() =>
              activeMenu === "catalog"
                ? setActiveMenu("")
                : setActiveMenu("catalog")
            }
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Catalog</a>
          </Menu.Item>
          <span className="divider"></span>
          <Menu.Item
            as="span"
            className="nav-menu-item"
            name="contacts"
            active={pathname.indexOf("contacts") !== -1}
            onClick={() => history.push("contacts")}
          >
            <Link to={"/contacts"}>Contacts</Link>
          </Menu.Item>
        </Menu>
        {activeMenu === "catalog" && (
          <div className="category category-wrapper">
            {catalogMap.map((menu) => (
              <Link to={`/catalog/${menu.substring(1)}`}>
                <Header
                  className={
                    pathname.indexOf(menu.substring(1)) !== -1 && "active"
                  }
                  as="h3"
                >
                  {menu}
                </Header>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  })
);
