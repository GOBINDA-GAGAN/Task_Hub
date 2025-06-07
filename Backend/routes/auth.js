import express from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import { registerSchema,loginSchema } from "../libs/validate-schema.js";
import { login, registerUser } from "../controllers/auth.controller.js";

const router = express.Router();



//? @route->  /api-v1/auth/register
router.post(
  "/register",
  validateRequest({
    body: registerSchema,
  }),
  registerUser
);

//? @route->  /api-v1/auth/login 


router.post(
  "/login",
  validateRequest({
    body:loginSchema,
  }),
login
);

export default router;
