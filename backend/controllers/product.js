import models from "../models";
import jwt from "jsonwebtoken";
import { response } from "express";

const Product = models.Product;
const Image = models.Image;

const secret = "bla";

export const getProducts = async (req, res, next) => {
    const {
        orderBy = "ASC",
        sortBy = "name",
        offset = 0,
        limit = 20,
    } = req.body;
    const products = await Product.findAll({
        limit,
        offset,
        order: [[sortBy, orderBy.toUpperCase()]],
        include: [Image],
    });
    return res.json({ products: products });
};

export const getProductById = async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findByPk(productId, { include: [Image] });
    if (product) return res.json({ success: true, product });
    return res.json({ success: false });
};
