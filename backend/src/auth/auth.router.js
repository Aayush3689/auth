import { Router } from "express";
import { handleLogin, handleRegister } from "../auth/auth.controller.js";

export const router = Router();
router.post("/register", handleRegister);
router.post("/login", handleLogin);
