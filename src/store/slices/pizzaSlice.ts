import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

// type FetchPizassArg = Record<string,string>
type FetchPizassArg = {
  pageCount: string;
  categoryId: number;
  sortType: string;
};

type PizzaItems = {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: string;
};

interface PizzaSliceState {
  items: PizzaItems[];
  status: boolean;
}

const initialState: PizzaSliceState = {
  items: [],
  status: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaItems[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = true;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = false;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = false;
      state.items = [];
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = true;
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = false;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = false;
  //     state.items = [];
  //   },
  // },
});
// export const fetchPizzas = createAsyncThunk("fetchPizzas", async (params: FetchPizassArg) => {
//   const { pageCount, categoryId, sortType } = params;
//   const { data } = await axios.get(
//     `https://63767cd7b5f0e1eb850d1867.mockapi.io/items?page=${pageCount}&limit=4&${
//       categoryId > 0 ? `category=${categoryId}` : ""
//     }&sortBy=${sortType}&order=desc`
//   );
//   return data as CartItem[];
// });

export const fetchPizzas = createAsyncThunk<PizzaItems[], FetchPizassArg>("fetchPizzas", async (params) => {
  const { pageCount, categoryId, sortType } = params;
  const { data } = await axios.get<PizzaItems[]>(
    `https://63767cd7b5f0e1eb850d1867.mockapi.io/items?page=${pageCount}&limit=4&${
      categoryId > 0 ? `category=${categoryId}` : ""
    }&sortBy=${sortType}&order=desc`
  );
  return data as PizzaItems[];
});

export const selectCart = (state: RootState) => state.cart;
export const selectFilter = (state: RootState) => state.filter;
export const selectPizza = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
