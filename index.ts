import * as path from "path";
import * as chalk from "chalk";
import express from "express";
import http from "http";
import { Socket } from "net";

const port = 3000;
const app = express();
const server = http.createServer(app);
let io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname + "/build/index.html"));
  // console.log("url:  " + __dirname + "/build/index.html");
});

const sendTheTime = (socket: Socket) => {
  const thetime =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  io.emit("timer", thetime);
  console.log("time sent: " + thetime);
};

server.listen(port, () => {
  console.log(`Listening on port ${chalk.default.bgMagenta(port + "")}`);
  // console.log("Listening on port 3000");
  //socket.emit("Emitting socket activity");
});
server.on("connection", (socket) => {
  console.log("1 connection opened..");
  // console.log("address works", socket.address());
  server.emit("connect", "I see your message");

  setInterval(function () {
    //console.log("Sending the time..");
    sendTheTime(socket);
  }, 2000);
});

export default app;
