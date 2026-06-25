import express from "express";
import userRoutes from "./routes/user-routes.js";

//! app initialize
const app = express();
const PORT = 8000;

//! routes
app.use(userRoutes);

//! server
app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to start server at ", PORT);
    return;
  }
  console.log("server started at ", PORT);
});
