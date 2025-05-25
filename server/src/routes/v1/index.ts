import { Router } from "express";
import CustomerRoutes from "./customer.routes";
import AuthRoutes from './auth';

const router = Router();

router.use("/customers", CustomerRoutes);
router.use("/auth", AuthRoutes); 
export default router;