import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let src = fs.createReadStream("./index.html", "utf-8");
    res.writeHead(200, { "content-type": "text/html" });
    src.pipe(res);
  } else if (req.url === "/styles") {
    let src = fs.createReadStream("./style.css", "utf-8");
    res.writeHead(200, { "content-type": "text/css" });
    src.pipe(res);
  } else if (req.url === "/users") {
    let src = fs.createReadStream("./data.json", "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    src.pipe(res);
  } else {
    res.end("NOT FOUND");
  }
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
