import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzasThunk } from './thunk';
import { initialState } from './initialState';
import { PizzaItems } from 'store/types';

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<PizzaItems[]>) => {
			state.items = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchPizzasThunk.pending, state => {
			state.status = true;
			state.items = [];
		});
		builder.addCase(fetchPizzasThunk.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = false;
		});
		builder.addCase(fetchPizzasThunk.rejected, state => {
			state.status = false;
			state.items = [];
		});
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
