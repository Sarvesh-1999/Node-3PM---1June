import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth-middleware.js";
import * as authControllers from "../controllers/user-controllers.js";
const router = Router();

router.post("/register", authControllers.register);
router.post("/verify", authControllers.verifyEmail);
router.post("/login", authControllers.login);
router.post("/logout",isAuthenticated ,authControllers.logout);

export default router;
