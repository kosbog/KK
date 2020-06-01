import * as React from "react";
import { observer } from "mobx-react-lite";
import { Catalog } from 'src/pages/Catalog';

export const Home = observer(() => {
  return (
    <>
      <Catalog />
    </>
  );
});
