import React, { Fragment } from "react";
import numberFormatter from "helpers/numberFormatter";

export default function(number, currency) {
  const currencyTemplates = {
    ru: `${numberFormatter(number)}\u00A0₽`,
    en: `$${numberFormatter(number)}`,
  };
  return currencyTemplates[currency];
}
