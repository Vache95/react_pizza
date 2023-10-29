import { ISortItem } from 'types/misc';

// path
export const HOME: string = '/';
export const CART: string = '/cart';
export const PIZZA: string = '/pizza/:id';
export const NOTH_FOUND: string = '*';

//tab
export const dataCategories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

// pizza-block
export const typesName: string[] = ['тонкое', 'традиционное'];

export const list: ISortItem[] = [
	{ name: 'популярности', sortProperty: 'rating' },
	{ name: 'цене', sortProperty: 'price' },
	{ name: 'алфавиту', sortProperty: 'title' },
];
