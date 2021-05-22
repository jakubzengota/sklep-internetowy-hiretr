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
        event.target.value < 0
            ? event.target.value = 1
            : (dispatch(
                changeQuantity({
                    itemId,
                    quantity: event.target.value,
                })                
            ))
    }
    const handleEmpty = (event) => {        
        console.log(event.target.value.charAt(0));
        if (event.target.value.charAt(0) == 0 || Math.round(event.target.value) == 0 || event.target.value % 2 != 0) {
                dispatch(
                changeQuantity({
                    itemId,
                    quantity: 1,
                }))   
            if (event.target.value % 2 != 0) {                
                let val = event.target.value;
                if (Math.round(val) == 0) {
                    dispatch(
                    changeQuantity({
                        itemId,
                        quantity: 1,
                    }))
                } else {
                    dispatch(
                    changeQuantity({
                        itemId,
                        quantity: Math.round(event.target.value),
                    }))
                }
            } 
        } else {          
            dispatch(
            changeQuantity({
                itemId,
                quantity: event.target.value,
            })                
        )}
    }
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
                <Typography variant="subtitle1">{item.product.product_cost.replace(".",",") + " PLN"}</Typography>
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
                    defaultValue={item.quantity}
                    InputProps={{ inputProps: { min: "1" }}}
                    onBlur={handleEmpty}
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
