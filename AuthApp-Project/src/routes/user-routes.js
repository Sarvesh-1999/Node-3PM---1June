import { Router } from "express";
import * as authControllers from "../controllers/user-controllers.js";
const router = Router();

router.post("/register", authControllers.register);
router.post("/verify", authControllers.verifyEmail);
router.post("/login", authControllers.login);
router.post("/logout", authControllers.logout);

export default router;
