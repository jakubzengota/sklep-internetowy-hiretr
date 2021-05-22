import React from "react";

const initialState = {
    products: [
        { id: 1, name: "Product 1", desc: "A nice thing", price: 9.99 },
        { id: 2, name: "Product 2", desc: "Another thing", price: 3.45 },
        { id: 3, name: "Product 3", desc: "Something else", price: 6.51 },
        { id: 4, name: "Product 4", desc: "Best thing of all", price: 14.11 },
    ],
    shipping: [
        {
            id: 1,
            name: "Dostawa kurierem",
            description: "2-3 dni roboczych",
            cost: 20.0,
        },
    ],
    payment: ["Szybkie płatności"],
};

export default React.createContext(initialState);
