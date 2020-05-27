import * as React from "react";
import { observer } from "mobx-react-lite";
import { Logo } from 'src/components/Logo';

export const Home = observer(() => {
  return (
    <>
      {/* <NavBar /> */}
      <Logo />
    </>
  );
});
