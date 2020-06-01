import * as React from "react";
import { observer } from "mobx-react-lite";
import { Label, SemanticCOLORS } from "semantic-ui-react";

export type LabelType = "SALE" | "NEW" | "DISCOUNT";
interface InfoLabelProps {
  type: LabelType;
}

const labelsMap: {
  [key in LabelType]: {
    color: SemanticCOLORS;
    text: string;
  };
} = {
  SALE: {
    color: "red",
    text: "SALE",
  },
  NEW: {
    color: "blue",
    text: "NEW",
  },
  DISCOUNT: {
    color: "red",
    text: "-50%",
  }
};

export const InfoLabel = observer(({ type, ...rest }: InfoLabelProps) => {
  return labelsMap[type] && (
    <Label className="catalog-item-label" floating as="a" color={labelsMap[type].color}>
      {labelsMap[type].text}
    </Label>
  );
});
