import * as React from "react";
import { Icon } from "semantic-ui-react";

export const BackToTop = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="scroll-top-wrapper" onClick={() => scrollTop()}>
      <Icon fitted size="large" name="arrow up" />
    </div>
  );
};
