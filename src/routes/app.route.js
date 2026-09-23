import express from "express";
import { demo, registerController } from "../controllers/app.controller.js";
import registerValidation from "../validators/auth.validator.js";

const router = express.Router();

router.get("/", demo);
router.post("/register", registerValidation, registerController);

export default router;
