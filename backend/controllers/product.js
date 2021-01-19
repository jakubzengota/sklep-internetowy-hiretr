import models from "../models";
import jwt from "jsonwebtoken";
import { response } from "express";

const Product = models.Product;
const Image = models.Image;

const secret = "bla";

export const getProducts = async (req, res, next) => {
    const { orderBy = "ASC", sortBy = "name" } = req.body;
    const products = await Product.findAll({
        order: [[sortBy, orderBy.toUpperCase()]],
        include: [Image],
    });
    console.log(JSON.stringify(products[0], null, 2));
    return res.json({ Products: products });
};

export const getProductById = async (req, res, next) => {
    const { productId } = req.params;
    console.log(productId);
    const product = await Product.findByPk(productId);
    if (product) return res.json({ success: true, product });
    return res.json({ success: false });
};
