import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { Wrapper } from "client/routes/Layout/index.styled";

export default function({ route }) {
  return <Wrapper>{renderRoutes(route.routes)}</Wrapper>;
}
