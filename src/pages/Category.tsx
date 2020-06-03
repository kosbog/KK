import * as React from "react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "semantic-ui-react";

interface CategoryProps extends RouteComponentProps<null> {
  isPage?: boolean;
}

export const Category = observer(
  ({ isPage, match: { url }, ...rest }: CategoryProps) => {
    // const data = Array.from("123456789".repeat(4));

    React.useEffect(() => window.scrollTo(0, 0));

    return (
      <div className="category category-wrapper">
        <Header as="h2">#bikerjacket</Header>
        <Header as="h2">#bomberjacket</Header>
        <Header as="h2">#oversizejacket</Header>
        <Header as="h2">#truckerjacket</Header>
        <Header as="h2">#furjacket</Header>
        <Header as="h2">#teddyjacket</Header>
        <Header as="h2">#suedejacket</Header>
        <Header as="h2">#dufflejacket</Header>
      </div>
    );
  }
);
