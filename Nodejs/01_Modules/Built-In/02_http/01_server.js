// ! HTTP MODULE is a core module used to create server

//! STEPS TO CREATE A SERVER
// 1) import http
// 2) use createServer()
// 3) assign a PORT number
// 4) define routes

import http from "node:http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h2>Hello WOrld</h2>");
  res.end();
});

server.listen(9000, (err) => {
  if (err) {
    console.log("unable to start server", err);
    return;
  }

  console.log("Server started at PORT 9000");
});
