import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Customers");
});

router.post("/", (req, res) => {
    res.send("Customers");
});

router.put("/", (req, res) => {
    res.send("Customers");
});

router.delete("/", (req, res) => {
    res.send("Customers");
});

export default router;