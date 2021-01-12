import { Router } from "express";
import { getProducts, getProductById } from "../controllers/product";

const router = Router({ mergeParams: true });

router.get("/", getProducts);
router.get("/:productId", getProductById);

export default router;
