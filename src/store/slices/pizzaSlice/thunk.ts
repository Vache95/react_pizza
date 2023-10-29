import { createAsyncThunk } from '@reduxjs/toolkit';
import { pizzasGet } from 'services/pizzaServices';

type FetchPizassArg = {
    pageCount: number;
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

export const fetchPizzasThunk = createAsyncThunk<PizzaItems[], FetchPizassArg>('fetchPizzas', async params => {
    const { pageCount, categoryId, sortType } = params;
    const { data } = await pizzasGet(pageCount, categoryId, sortType);
    return data as PizzaItems[];
});
