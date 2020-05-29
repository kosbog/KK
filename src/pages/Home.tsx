import * as React from "react";
import { observer } from "mobx-react-lite";
import { Logo } from 'src/components/Logo';
import { Catalog } from 'src/pages/Catalog';

export const Home = observer(() => {
  return (
    <>
      <Logo />
      <Catalog />
    </>
  );
});
