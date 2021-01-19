import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Image extends Model {
        toJSON() {
            const path = this.path.replace("full/", "");
            return {
                full: "http://localhost:4000/images/full/" + path,
                medium: "http://localhost:4000/images/thumbs/big/" + path,
                small: "http://localhost:4000/images/thumbs/medium/" + path,
                tiny: "http://localhost:4000/images/thumbs/small/" + path,
            };
        }
    }
    Image.init(
        {
            checksum: DataTypes.STRING(50),
            path: DataTypes.STRING(50),
            status: DataTypes.STRING(30),
        },
        {
            sequelize,
            tableName: "images",
            timestamps: false,
        }
    );
    return Image;
};
