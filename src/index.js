#!/usr/bin/env node

const serverListener = require("./lib/listen.js");
const cleanup = require("./lib/cleanup.js");

serverListener();

process.on("SIGINT", cleanup);

