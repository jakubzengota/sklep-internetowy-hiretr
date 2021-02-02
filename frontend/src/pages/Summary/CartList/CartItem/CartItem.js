import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import { removeItem, changeQuantity } from "../../../../redux/slices/cart";

export default function CartItem({ itemId }) {
    const item = useSelector((state) => state.cart.itemsById[itemId]);

    return (
        <div style={{ display: "flex", height: "auto", marginBottom: 20 }}>
            <div
                style={{
                    height: 88,
                    width: 59,
                    backgroundImage: `url(${item.product.images[0].tiny})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                }}
            ></div>
            <div style={{ flexGrow: 1, padding: 10 }}>
                <Typography
                    style={{
                        fontFamily: "Open Sans Condensed",
                        fontSize: "20px",
                    }}
                >
                    {/* Bluza Rozmiar: XL Ilość: 2 Cena: 59,99 PLN */}
                    {`${item.product.name} Rozmiar: ${item.size} Ilość: ${
                        item.quantity
                    } Cena: ${item.quantity * item.product.product_cost} PLN`}
                </Typography>
            </div>
        </div>
    );
}
