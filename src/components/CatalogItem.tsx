import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Header,
  Transition,
  Icon,
  Button,
  Item,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LabelType, InfoLabel } from "./InfoLabel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CustomSlider } from './CustomSlider';

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
          <div className="catalog-item-wrapper">
            <div className="image-wrapper">
              <InfoLabel type={tempLabel} />
              <CustomSlider withButtons={isPage} />
            </div>

            <div className="info-wrapper">
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
                </>
              )}
            </div>
          </div>
        </div>
      </Transition>
    );
  }
);
