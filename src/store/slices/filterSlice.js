import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

export const counterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    SortPizza: (state, action) => {
      state.sort = action.payload;
    },
    seyPageCount: (state, action) => {
      state.pageCount = action.payload;
    },
    seyFilters: (state, action) => {
      state.sort = action.payload.sortList;
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, SortPizza, seyPageCount, seyFilters, setSearchValue } =
  counterSlice.actions;

export default counterSlice.reducer;
