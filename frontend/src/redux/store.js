import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import productReducer from "./slices/products";
import cartReducer from "./slices/cart";

export default configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware();
        if (process.env.NODE_ENV === "production") return defaultMiddleware;
        const logger = createLogger({
            collapsed: true,
        });
        return defaultMiddleware.concat(logger);
    },
});
