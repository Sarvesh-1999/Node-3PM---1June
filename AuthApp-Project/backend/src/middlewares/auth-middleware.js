import jwt from "jsonwebtoken";
import { Session } from "../models/session-model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Token is missing or invalid",
      });
    }

    const token = authHeaders.split(" ")[1];

    const decodedInfo = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decodedInfo;

    const session = await Session.findOne({ userId: id });

    if (!session) {
      return res.status(400).json({
        success: false,
        message: "user not found OR session expired!!",
      });
    }

    req.userId = id;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
