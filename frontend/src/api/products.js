import { memoize } from "lodash";

export const getProducts = memoize(async ({ offset, limit }) => {
    console.log(offset);
    console.log(limit);
    const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            offset,
            limit,
        }),
    });
    const json = await response.json();
    return json.products;
});
//
export const getProductById = (async (productId) => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const json = await response.json();
    return json.product;
});
