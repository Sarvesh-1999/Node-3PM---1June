import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import authRoutes from "./src/routes/user-routes.js";
import { connectDB } from "./src/config/database.js";

const app = express();
const PORT = process.env.PORT || 9000;
connectDB()

app.use(express.json())
app.use("/api/v1", authRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start server", err);
    return;
  }
  console.log("Server started at ", PORT);
});
