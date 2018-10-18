import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Chat from "components/Chat";
import Toggle from "components/Toggle";
import { Wrapper } from "client/routes/Support/index.styled";

export default function({ route }) {
  return (
    <Fragment>
      <Chat userId={2} />
      <Wrapper>
        <Toggle />
        {renderRoutes(route.routes)}
      </Wrapper>
    </Fragment>
  );
}
