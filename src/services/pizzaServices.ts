import AxiosInstance from 'lib/api';
import { PIZZA_URL_ID, PIZZA_URL_PARAMS } from 'utils';

export const pizzasGet = (pageCount: number, categoryId: number, sortType: string) => AxiosInstance.get(PIZZA_URL_PARAMS(pageCount, categoryId, sortType));

export const pizzaGet = (id: string | undefined) => AxiosInstance.get(PIZZA_URL_ID(id));
