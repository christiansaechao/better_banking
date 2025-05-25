import express from "express";
import SignUpRoutes from "./sign-up.routes";

const router = express.Router();
router.use("/sign-up", SignUpRoutes);

export default router;