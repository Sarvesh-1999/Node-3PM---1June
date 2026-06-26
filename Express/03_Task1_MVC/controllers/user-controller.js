import { connectDB } from "../config/database.js";
import fs from "node:fs";
import path from "node:path";

const getHTMLPage = async (req, res) => {
  let filepath = path.join(import.meta.dirname, "..", "pages", "index.html");
  console.log(filepath);
  let src = fs.createReadStream(filepath, "utf-8");
  src.pipe(res);
};
const handleSubmit = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const collection = await connectDB();
    collection.insertOne({ username, email, password });
    res.json({ message: "User created", data: { username, email } });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to create a user", error });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const collection = await connectDB();
    const users = await collection.find({}).toArray();
    res.json({ message: "fetched all users", users, totalUsers: users.length });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to fetch all users", error });
  }
};

export { getAllUsers, getHTMLPage, handleSubmit };
