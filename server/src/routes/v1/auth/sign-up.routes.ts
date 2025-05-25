import express from 'express';
import { handleNewEmployee } from '../../../controllers/registerController';
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Testing the sign-up route");
});

router.post('/', handleNewEmployee);

export default router;