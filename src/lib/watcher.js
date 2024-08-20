const chokidar = require("chokidar");

module.exports = chokidar.watch(process.cwd(), {
  ignoreInitial: true
});

