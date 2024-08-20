#!/usr/bin/env node
module.exports=NODE_NO_WARNINGS=1

const serverListener = require("./lib/listen.js");
const cleanup = require("./lib/cleanup.js");

serverListener();

process.on("SIGINT", cleanup);

