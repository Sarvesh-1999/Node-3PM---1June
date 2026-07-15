import { User } from "../models/user-model.js";
import { Session } from "../models/session-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verify } from "../config/verify-mail.js";

export async function register(req, res) {
  try {
    let { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists !",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    //! GENERATING TOKEN
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    //! VERIFYING EMAIL
    verify(token, email);

    res.status(201).json({
      success: true,
      message: "User created",
      data: newUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}

export async function verifyEmail(req, res) {
  try {
    const authHeaders = req.headers.authorization;
    console.log(req.headers.authorization);
    

    if (!authHeaders) {
      return res.status(400).json({
        success: false,
        message: "Token is missing",
      });
    }

    const token = authHeaders.split(" ")[1];
    console.log(token);

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded); // { id: '6a50948fd679fc30a09eda39', iat: 1783665807, exp: 1783666407 }
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "Token Expired",
        });
      }

      return res.status(400).json({
        success: false,
        message: "Token verification failed",
        error,
      });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isVerified = true;
    user.save();

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does't exists",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({
        success: false,
        message: "Password mismatched",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "User not verified. Please verify yourself. Check Email!!",
      });
    }

    const existingSession = await Session.findOne({ userId: user._id });
    if (existingSession) {
      await Session.deleteOne({ userId: user._id });
    }

    await Session.create({ userId: user._id });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    user.isLoggedIn = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Login Success",
      data: { username: user.username },
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}

export async function logout(req, res) {
  try {
    const userId = req.userId;
    console.log("userID", userId);

    await Session.deleteMany({ userId });
    await User.findByIdAndUpdate(userId, { isLoggedIn: false });

    res.status(200).json({
      success: true,
      message: "user logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
