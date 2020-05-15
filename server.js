const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();
server.use(cors());
server.use(express.json());
server.use(helmet());
server.use("/api/users", userRouter);
server.use("api/posts", logger, postRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}


module.exports = server;
