import { Router } from "express";
import { getProducts, getProductById } from "../controllers/product";

const router = Router({ mergeParams: true });

router.get("/:productId", getProductById);
router.use("/", getProducts);


export default router;
