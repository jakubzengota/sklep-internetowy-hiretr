import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "../../api/products";

const inistalState = {
    productsById: {},
    productIds: [],
    loading: false,
};

function startLoading(state) {
    state.loading = false;
}

function loadingFailed(state, action) {
    state.loading = false;
}

export const products = createSlice({
    name: "products",
    initialState: inistalState,
    reducers: {
        getProductStart: startLoading,
        getProductsStart: startLoading,
        getProductSuccess: (state, { payload }) => {
            const { id } = payload;
            state.loading = false;
            state.productIds.push(id);
            state.productsById[id] = payload;
        },
        getProductsSuccess: (state, { payload }) => {
            state.loading = false;
            payload.forEach((product) => {
                state.productsById[product.id] = product;
            });
            state.productIds = payload.map((product) => product.id);
        },
        getProductFailure: loadingFailed,
        getProductsFailure: loadingFailed,
    },
});

export const {
    getProductStart,
    getProductsStart,
    getProductSuccess,
    getProductsSuccess,
    getProductFailure,
    getProductsFailure,
} = products.actions;

export default products.reducer;

export const fetchProducts = () => async (dispatch) => {
    dispatch(getProductStart());
    try {
        const products = await getProducts();
        dispatch(getProductsSuccess(products));
    } catch (err) {
        dispatch(getProductsFailure());
    }
};

export const fetchProductById = (productId) => async (dispatch, getState) => {
    const state = getState();
    if (state.products.productIds.indexOf(productId) !== -1) return;
    dispatch(getProductStart());
    try {
        const product = await getProductById(productId);
        dispatch(getProductSuccess(product));
    } catch (err) {
        console.log(err);
        dispatch(getProductFailure());
    }
};
