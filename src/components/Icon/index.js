import React from "react";
import PropTypes from "prop-types";

import { Icon } from "components/Icon/index.styled";
import expand from "client/img/expand-icon.svg";
import close from "client/img/close-icon.svg";
import message from "client/img/message-icon.svg";

const icons = {
  expand,
  close,
  message,
};

export default function I({ type }) {
  return <Icon src={icons[type]} />;
}

I.propTypes = {
  type: PropTypes.string.isRequired,
};
