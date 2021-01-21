import { Sequelize, DataTypes } from "sequelize";

import User from "./user";
import Product from "./product";
import Image from "./image";

export const sequalize = new Sequelize("docker", "docker", "docker", {
    dialect: "postgres",
    host: "postgres",
});

const models = {
    User,
    Product,
    Image,
};

Object.keys(models).map((key) => {
    models[key] = models[key](sequalize, DataTypes);
});

models.Product.hasMany(models.Image, {
    foreignKey: "product_id",
});
models.Image.belongsTo(models.Product, {
    foreignKey: "product_id",
});

export default models;
