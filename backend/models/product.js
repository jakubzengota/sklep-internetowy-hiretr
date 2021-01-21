// import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            name: DataTypes.STRING(50),
            product_number: DataTypes.STRING(25),
            color: DataTypes.STRING(30),
            product_cost: DataTypes.DECIMAL,
            description: DataTypes.STRING,
        },
        {
            tableName: "products",
            timestamps: false,
        }
    );
    Product.prototype.toJSON = function () {
        return {
            id: this.id,
            name: this.name,
            product_cost: this.product_cost,
            images: this.Images,
            description: this.description,
        };
    };
    return Product;
};
