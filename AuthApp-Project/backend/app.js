import dotenv from "dotenv";
dotenv.config({ quiet: true });
import cors from "cors";
import express from "express";
import authRoutes from "./src/routes/user-routes.js";
import { connectDB } from "./src/config/database.js";

const app = express();
const PORT = process.env.PORT || 9000;
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
  }),
);
app.use(express.json());
app.use("/api/v1", authRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start server", err);
    return;
  }
  console.log("Server started at ", PORT);
});
