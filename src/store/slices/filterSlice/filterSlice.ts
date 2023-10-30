import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { FilterSliceState, Sort } from 'store/types';

export const counterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
		SortPizza: (state, action: PayloadAction<Sort>) => {
			state.sort = action.payload;
		},
		seyPageCount: (state, action: PayloadAction<number>) => {
			state.pageCount = action.payload;
		},
		seyFilters: (state, action: PayloadAction<FilterSliceState>) => {
			state.sort = action.payload.sort;
			state.pageCount = Number(action.payload.pageCount);
			state.categoryId = Number(action.payload.categoryId);
		},
	},
});

export const { setCategoryId, SortPizza, seyPageCount, seyFilters, setSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
