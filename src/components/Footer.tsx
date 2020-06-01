import * as React from "react";
import { observer } from "mobx-react-lite";
import { CustomDivider } from "./Divider";

export const Footer = observer(() => {
  return (
    <>
      <CustomDivider />
      <div className="footer-wrapper">
        <div
          className="footer-container"
          style={{ textAlign: "center", marginBottom: 16, fontSize: 12 }}
        >
          &copy;{` ${new Date().getFullYear()} `}Konstantin Kositskiy
        </div>
      </div>
    </>
  );
});
