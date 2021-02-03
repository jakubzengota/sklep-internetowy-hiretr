import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

import CartItem from "./CartItem";

export default function ItemList() {
    const { itemIds } = useSelector((state) => state.cart);
    if (itemIds.length === 0) {
        return (
            <React.Fragment>
                <Typography variant="h5">Twój koszyk jest pusty!</Typography>
            </React.Fragment>
        );
    }
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
