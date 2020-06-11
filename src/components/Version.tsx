import * as React from "react";

export const Version = () => {
  if (process.env.NODE_ENV === "production") {
    return null;
  }
  return <div className="version">{`v${process.env.REACT_APP_VERSION}`}</div>;
};
