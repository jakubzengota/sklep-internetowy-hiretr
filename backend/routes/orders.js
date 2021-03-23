import { Router } from "express";
import { placeOrder } from "../controllers/orders";

const router = Router({ mergeParams: true });

router.post("/place", placeOrder);

export default router;
