import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";

export default function ItemList() {
    const { productIds } = useSelector((state) => state.products);
    return (
        <React.Fragment>
            {productIds.map((productId) => (
                <ProductItem productId={productId} key={productId} />
            ))}
        </React.Fragment>
    );
}
