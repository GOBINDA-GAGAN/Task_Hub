import express from "express"

import authRouters from "./auth.js"

const router=express.Router()
router.use("/auth",authRouters)

export default router;