import { createSlice } from "@reduxjs/toolkit";

const initialState = Array.isArray(JSON.parse(localStorage.getItem("products")))
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCard: (state, { payload }) => {
      const productCart = state.find((p) => p.id === payload.id);
      if (productCart) {
        productCart.amount += 1;
      } else {
        state.push({ ...payload, amount: 1 });
      }
      localStorage.setItem("products", JSON.stringify(state));
    },

    amountPlus: (state, { payload }) => {
      const productCart = state.find((p) => p.id === payload.id);
      if (productCart) {
        productCart.amount += 1;
      }
      localStorage.setItem("products", JSON.stringify(state));
    },
    amountMinus: (state, { payload }) => {
      const productCart = state.find((p) => p.id === payload.id);
      if (productCart) {
        productCart.amount -= 1;
      }
      localStorage.setItem("products", JSON.stringify(state));
    },
    deleteProduct: (state, { payload }) => {
      const productCart = state.filter((p) => p.id !== payload.id);
      localStorage.setItem("products", JSON.stringify(productCart));
      return [...productCart];
    },
  },
});

export const { addToCard, amountPlus, amountMinus, deleteProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
