import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Image,
  Header,
  Transition,
  Icon,
  Menu,
  Button,
  Item,
  Placeholder,
} from "semantic-ui-react";
import product1 from "../assets/images/products/1.jpg";
import product2 from "../assets/images/products/2.jpg";
import { Link } from "react-router-dom";

interface CatalogItemProps {
  id: string;
  classNames?: string;
  isPage?: boolean;
}

export const CatalogItem = observer(
  ({ id, classNames, isPage }: CatalogItemProps) => {
    const [isVisible, setVisible] = React.useState(false);
    const [isLoaded, setLoaded] = React.useState(false);
    const animation = classNames
      ? "fade up"
      : id === "1"
      ? "fade right"
      : "fade left";

    React.useEffect(() => {
      window.scrollTo(0, 0);
      setVisible(true);
    }, [isVisible]);

    const p1 = {
      content: "Bicker leather jacket",
      subheader: "$699",
    };

    return (
      <Transition visible={isVisible} animation={animation} duration={600}>
        <div className={classNames}>
          {!isLoaded && (
            <Placeholder className="catalog-item-image-placeholder">
              <Placeholder.Image />
            </Placeholder>
          )}
          <Image
            src={id === "1" ? product1 : product2}
            fluid
            onLoad={() => setLoaded(true)}
          />
          <Header
            as={isPage ? "h2" : "h4"}
            className="catalog-item-header"
            {...p1}
          />

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

              <Link to={"/"}>
                <Button fluid basic color="black" className="back-homepage">
                  <Icon name="arrow left" /> Back to homepage
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
                  onClick={() => window.open("https://t.me/KonstantinKositskiy")}
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
