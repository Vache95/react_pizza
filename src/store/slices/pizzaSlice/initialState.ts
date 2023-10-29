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

export const initialState: PizzaSliceState = {
    items: [],
    status: true,
};
