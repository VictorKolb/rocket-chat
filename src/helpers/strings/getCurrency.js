import React, { Fragment } from "react";
import numberFormatter from "helpers/numberFormatter";

export default function(number, currency) {
  const currencyTemplates = {
    ru: (
      <Fragment>
        {numberFormatter(number)}
        &nbsp;₽
      </Fragment>
    ),
    en: `$${numberFormatter(number)}`,
  };
  return currencyTemplates[currency];
}
