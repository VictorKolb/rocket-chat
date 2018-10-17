import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import io from "socket.io-client";
import { Wrapper } from "client/routes/Layout/index.styled";

const socket = io("http://localhost:7000");

socket.emit("hello", "world");

socket.on("news", data => {
  console.log(data);
});

export default function({ route }) {
  return <Wrapper>{renderRoutes(route.routes)}</Wrapper>;
}
