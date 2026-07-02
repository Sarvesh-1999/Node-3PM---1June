import express from "express";
import { connectDB } from "./src/config/db.js";
import bookRoutes from "./src/routes/book-routes.js";

const app = express();
const PORT = 9000;

//! database connection
connectDB();

//! middleware
app.use(express.json());

//! routes
app.use("/api/v1", bookRoutes); // http://localhost:9000/api/v1/all-books

app.listen(PORT, (err) => {
  if (err) {
    console.log("unable to started server", err);
    return;
  }
  console.log(`Server started at ${PORT}`);
});
