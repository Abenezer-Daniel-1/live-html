const express = require("express");

const watcher = require("./watcher.js");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.set({
      "Cache-Control": "no-cache",
      "Content-type": "text/event-stream",
      "Access-Control-Allow-Origin": "*",
      "Connection": "keep-alive"
    });

    res.flushHeaders(); 
  
    watcher.on("all", () => res.write("change"));
  } catch(err) {
    console.error(err);

    res
      .status(500)
      .send("Server side error encountered.");
  }
});

module.exports = router;

