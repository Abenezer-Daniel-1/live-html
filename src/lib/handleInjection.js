const fs = require("fs");
const path = require("path");

const injector = require("./injector.js");

module.exports = (req, res, next) => {
  try { 
    if(!(req.accepts().includes("text/html"))) return next();

    if(!fs.existsSync(path.join(process.cwd(), "live-html-147"))) 
      fs.mkdirSync("live-html-147");

    const filename = req.url.endsWith("/") ? "index.html" : path.basename(req.url);
    const filePath = path.join(process.cwd(), "live-html-147", filename);

    const fileEndPath = req.url.endsWith("/") ? `${req.path}index.html` : req.path;
    const fileContent = fs.readFileSync(path.join(process.cwd(), fileEndPath), "utf-8");

    injector(filePath, fileContent);

    res.sendFile(filePath);
  } catch(err) {
    if(err.code === "ENOENT")
      return res
        .status(404)
        .send("The resource your looking for doesn't not exist.");

    res.send("No file was found, please make sure your url ends with either a \"\/\"\ or a valid \"\.html\"\ extension");
  }
}

