import * as React from "react";
import { observer } from "mobx-react-lite";
import { SocialLinks } from "./SocialLinks";
import { withRouter, RouteComponentProps } from "react-router-dom";

export const Footer = withRouter(
  observer(({ location: { pathname } }: RouteComponentProps) => {
    return (
      <>
        {/* <CustomDivider /> */}
        <div className="footer-wrapper">
          <SocialLinks withText={false} />
          <div className="footer-container">
            &copy;{` ${new Date().getFullYear()} `}
            Konstantin Kositskiy
          </div>
        </div>
      </>
    );
  })
);
