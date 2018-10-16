import React from "react";
import { Number } from "components/ColoredNumberString/index.styled";

export default function({ number, children, withSymbol }) {
  const isPositive = number > 0;
  return (
    <Number isPositive={isPositive}>
      {withSymbol && isPositive && "+"}
      {children}
    </Number>
  );
}
