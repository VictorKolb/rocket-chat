import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Chat from "client/routes/Chat";
import Toggle from "components/Toggle";
import { Wrapper } from "client/routes/Support/index.styled";

export default function({ route }) {
  return (
    <Fragment>
      <Chat />
      <Wrapper>
        <Toggle />
        {renderRoutes(route.routes)}
      </Wrapper>
    </Fragment>
  );
}
