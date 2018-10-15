import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "helpers/routes.js";
import { ServerStyleSheet } from "styled-components";

export default (req, store) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {renderRoutes(Routes())}
        </StaticRouter>
      </Provider>,
    ),
  );
  const styledComponents = sheet.getStyleTags();
  return `
    <html>
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <title>rocket chat</title>
      ${styledComponents}
      </head>
      <body>
        <div id="root">${content}</div>
        ${NODE_ENV === "production" ? `<!-- Yandex.Metrika counter -->  ` : ""}
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/assets/client.js"></script>
      </body>
    </html>
  `;
};
