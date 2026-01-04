import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  initialState: [],
  name: "products",
  reducers: {
   addToCard: (state, { payload }) => {
  return !state.find((product) => product.id === payload.id)
    ? [...state, { ...payload, amount: 1 }] // ... (nuqtalar) qo'shildi
    : state.map((p) =>
        p.id === payload.id ? { ...p, amount: p.amount + 1 } : p
      );
},
  },
});
export const { addToCard } = productsSlice.actions;
export default productsSlice.reducer;
