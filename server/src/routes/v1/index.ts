import { Router } from "express";
import CustomerRoutes from "./customer.routes";

const router = Router();

router.use("/customers", CustomerRoutes);

export default router;