import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, changeQuantity } from "../../../../redux/slices/cart";

export default function CartItem({ itemId }) {
    const dispatch = useDispatch();
    const item = useSelector((state) => state.cart.itemsById[itemId]);
    const handleDeleteClick = () => {
        dispatch(removeItem({ itemId }));
    };
    const handleQuantityChange = (event) => {
        dispatch(
            changeQuantity({
                itemId,
                quantity: event.target.value,
            })
        );
    };
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    height: 160,
                    width: 120,
                    backgroundImage: `url(${item.product.images[0].small})`,
                }}
            ></div>
            <div style={{ flexGrow: 1, padding: 10 }}>
                <Typography variant="h6">{item.product.name}</Typography>
                <Typography variant="subtitle1">{item.product.id}</Typography>
                <Typography variant="subtitle1">
                    {`Rozmiar: ${item.size}`}
                </Typography>
                <TextField
                    size="small"
                    id="standard-number"
                    label="Ilość"
                    type="number"
                    style={{
                        width: 80,
                    }}
                    value={item.quantity}
                    onChange={handleQuantityChange}
                />
            </div>
            <div>
                <IconButton disableRipple onClick={handleDeleteClick}>
                    <DeleteIcon size="small" />
                </IconButton>
            </div>
        </div>
    );
}
