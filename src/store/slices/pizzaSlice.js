import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('fetchPizzas', async (params) => {
  const { pageCount, categoryId, sortType } = params;
  const { data } = await axios.get(
    `https://63767cd7b5f0e1eb850d1867.mockapi.io/items?page=${pageCount}&limit=4&${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType}&order=desc`,
  );
  return data;
});

const initialState = {
  items: [],
  status: true,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = true;
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = false;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = false;
      state.items = [];
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectFilter = (state) => state.filter;
export const selectPizza = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
