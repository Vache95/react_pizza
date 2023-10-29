import { RootState } from 'hooks';

export const selectCart = ({ cart }: RootState) => cart;
export const selectFilter = ({ filter }: RootState) => filter;
export const selectPizza = ({ pizza }: RootState) => pizza;
