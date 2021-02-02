import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

export default function CartList() {
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
