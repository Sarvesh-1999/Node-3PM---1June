import express from "express";
import fs from "node:fs";

const app = express();
const PORT = 9000;

// middlewares
app.use(express.urlencoded({ extended: true })); // it parses form data

// routes
app.get("/", (req, res) => {
  let src = fs.createReadStream("./pages/index.html", "utf-8");
  src.pipe(res);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("form submitted");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to start server at ", PORT);
    return;
  }
  console.log("Server started at port ", PORT);
});
