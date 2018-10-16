import React, { Fragment } from "react";
import numberFormatter from "helpers/numberFormatter";

export default function(percent) {
  return (
    <Fragment>
      <b>{numberFormatter(percent)}%</b>
      &nbsp;годовых
    </Fragment>
  );
}
