import { Router } from "express";
const router = Router();
import { getlogin, postlogin, getRegister, postRegister, getLogout } from "../controllers/authentication.controller.js";
router.get("/login", getlogin);
router.post("/login", postlogin);
router.get("/logout", getLogout);
router.get("/register", getRegister);
router.post("/register", postRegister);

// router.get("/panel", (req, res) => res.render("panel"));
export default router;
