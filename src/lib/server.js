const express = require("express");

const app = express();

const sse = require("./sse.js");
const handleInjection = require("./handleInjection.js");

app.use("/", handleInjection, express.static(process.cwd()));

app.use("/server-stream", sse);

module.exports = app;

