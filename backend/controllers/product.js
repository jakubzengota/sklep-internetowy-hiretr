import models from "../models";
import jwt from "jsonwebtoken";
import { response } from "express";

const Product = models.Product;

const secret = "bla";


export const getProducts = async (req , res, next) => {
    const products = await Product.findAll();
    return res.json({Products: products});    
}