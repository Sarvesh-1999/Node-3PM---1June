import { Router } from "express";
import {
  getHTMLPage,
  handleSubmit,
  getAllUsers,
} from "../controllers/user-controller.js";

const router = Router();

router.get("/", getHTMLPage);
router.post("/submit", handleSubmit);
router.get("/users", getAllUsers);


export default router