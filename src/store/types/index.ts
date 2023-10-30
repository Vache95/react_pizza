// cart slice
export type CartItem = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	type: string;
	size: number;
	count: number;
};

export interface CartSliceState {
	totalPrice: number;
	items: CartItem[];
}

// filter slice
export type Sort = {
	name: string;
	sortProperty: string;
};

export interface FilterSliceState {
	searchValue: string;
	categoryId: number;
	pageCount: number;
	sort: Sort;
}

// pizza slice
export type PizzaItems = {
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
	id: string;
};
export interface PizzaSliceState {
	items: PizzaItems[];
	status: boolean;
}
