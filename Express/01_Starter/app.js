//! STEP 1 :  IMPORT EXPRESS
import express from "express";

//! STEP 2 : INITIALIZE EXPRESS APPLICATION
const app = express();

//! STEP 4 : CREATE ROUTES
app.get("/", (req, res) => {
  res.send("HOME Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

//! STEP 3 : LISTEN A SERVER
app.listen(9000, (err) => {
  if (err) {
    console.log("Unable to start server");
  }

  console.log("Server started at port", 9000);
});
