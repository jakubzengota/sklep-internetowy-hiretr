import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "./CartItem";

export default function ItemList() {
    const { itemIds } = useSelector((state) => state.cart);
    return (
        <React.Fragment>
            <div>
                {itemIds.map((itemId) => (
                    <CartItem itemId={itemId} />
                ))}
            </div>
        </React.Fragment>
    );
}
