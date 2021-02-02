import { memoize } from "lodash";

export const getProducts = memoize(async () => {
    const response = await fetch("http://localhost:4000/products");
    const json = await response.json();
    return json.products;
});

export const getProductById = memoize(async (productId) => {
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const json = await response.json();
    return json.product;
});
