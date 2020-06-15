import * as React from "react";
import { observer } from "mobx-react-lite";
import { Link, RouteComponentProps } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import { ProductForm } from 'src/components/ProductForm';

interface AdminpanelProps extends RouteComponentProps<{}> {

}

export const Adminpanel = observer(
  ({ }: AdminpanelProps) => {
    return (
      <div>
        <Header content="Admin panel" />
        <Link to='/'>
          Got to homepage
        </Link>
        <ProductForm />
      </div>
    );
  }
);
