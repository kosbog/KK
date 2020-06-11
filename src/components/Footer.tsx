import * as React from "react";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => (
  <div className="footer-wrapper">
    <SocialLinks withText={false} />
    <div className="footer-container">
      &copy;{` ${new Date().getFullYear()} `}
      Konstantin Kositskiy
    </div>
  </div>
);
