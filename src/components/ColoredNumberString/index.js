import React from "react";
import { Number } from "components/ColoredNumberString/index.styled";

export default function({ number, children, withSymbol }) {
  const isPositive = number > 0;
  const numberString = `${children}`.replace(/-/gm, "");
  return (
    <Number isPositive={isPositive}>
      {withSymbol && (isPositive ? "+" : "-")}
      {numberString}
    </Number>
  );
}
