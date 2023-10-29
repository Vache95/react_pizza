export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
};

interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

export const initialState: CartSliceState = {
    totalPrice: 0,
    items: [],
};
