import { Router } from "express";
import { getProducts } from "../controllers/product";

const router = Router({ mergeParams: true });

router.get("/", getProducts);

export default router;