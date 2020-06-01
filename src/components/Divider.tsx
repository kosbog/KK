import * as React from "react";
import { observer } from "mobx-react-lite";
import { Icon } from "semantic-ui-react";

export const CustomDivider = observer(() => {
  return (
    <div className="custom-divider">
      <Icon name="cut" />
    </div>
  );
});
