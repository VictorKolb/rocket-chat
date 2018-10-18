import React from "react";
import PropTypes from "prop-types";
import { Number } from "components/ColoredNumberString/index.styled";

export default function ColoredNumberString({ number, children, withSymbol }) {
  const isPositive = number > 0;
  const numberString = `${children}`.replace(/-/gm, "");
  return (
    <Number isPositive={isPositive}>
      {withSymbol && (isPositive ? "+" : "-")}
      {numberString}
    </Number>
  );
}

ColoredNumberString.propsTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired,
  withSymbol: PropTypes.bool,
};

ColoredNumberString.defaultProps = {
  withSymbol: false,
};
