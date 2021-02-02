import { createSlice } from "@reduxjs/toolkit";

let nextItemId = 0;

export const cart = createSlice({
    name: "cart",
    initialState: {
        itemsById: {},
        itemIds: [],
    },
    reducers: {
        addItem: {
            reducer: (state, { payload }) => {
                const { itemId } = payload;
                state.itemsById[itemId] = payload;
                state.itemIds.push(itemId);
            },
            prepare: (payload) => {
                return {
                    payload: { itemId: nextItemId++, ...payload },
                };
            },
        },
        removeItem: (state, { payload }) => {
            const { itemId } = payload;
            delete state.itemsById.itemId;
            const index = state.itemIds.indexOf(itemId);
            state.itemIds.splice(index, 1);
        },
        changeQuantity: (state, { payload }) => {
            const { itemId, quantity } = payload;
            state.itemsById[itemId].quantity = quantity;
        },
    },
});

export const { addItem, removeItem, changeQuantity } = cart.actions;

export default cart.reducer;

export const addProduct = ({ product, quantity, size }) => (
    dispatch,
    getState
) => {
    const state = getState();
    const item = state.cart.itemIds
        .map((itemId) => state.cart.itemsById[itemId])
        .find((item) => item.product.id === product.id && item.size === size);
    const itemExists = !!item;
    if (itemExists) {
        dispatch(
            changeQuantity({
                itemId: item.itemId,
                quantity: item.quantity + quantity,
            })
        );
    } else {
        dispatch(addItem({ product, quantity, size }));
    }
};
