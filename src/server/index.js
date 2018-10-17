import path from "path";
import express from "express";
import { matchRoutes } from "react-router-config";
import routes from "helpers/routes";
import reducers from "helpers/reducers";
import renderer from "helpers/renderer";
import createStore from "helpers/createStore";
import apiRouter from "server/apiRouter";
import sockedIo from "socket.io";
import { Server as S } from "http";
const app = express();
const server = S(app);

const io = sockedIo(server);

io.on("connection", function(socket) {
  console.log("ололо");
  // socket.emit("news", { hello: "world" });
  socket.on("hello", function(data) {
    console.log(data);
  });

  socket.emit("news", "werwer");
});

app.use("/api", apiRouter);

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.use(express.static(path.resolve("public")));

app.get("*", (req, res) => {
  const store = createStore({
    req,
    reducers,
  });

  const promises = matchRoutes(routes(), req.path).map(data => {
    const { route, match } = data;
    return route.loadData ? route.loadData(store, match) : null;
  });

  Promise.all(promises)
    .then(() => {
      res.send(renderer(req, store));
    })
    .catch(err => console.error(err));
});

server.listen(7000, () => {
  console.log("Listening on port 7000");
});

app.use(function(req, res, next) {
  // var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.json(err.message);
});
