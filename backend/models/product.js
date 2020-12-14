import { DataTypes, Model } from "sequelize";


export default (sequelize) => {
    class Product extends Model {
        toJSON() {
            return {
                id: this.id,
                name: this.name,
                product_cost: this.product_cost,
            };
        }
    }
    Product.init(
        {
            name: DataTypes.STRING(50),
            product_number: DataTypes.STRING(25),
            color: DataTypes.STRING(30),
            product_cost: DataTypes.DECIMAL,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "products",
            timestamps: false,
        }
    );
    return Product;
};