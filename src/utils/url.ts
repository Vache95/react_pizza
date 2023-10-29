export const PIZZA_URL_ID = (id: string | undefined) => `items/${id}`;
export const PIZZA_URL_PARAMS = (pageCount: number, categoryId: number, sortType: string) =>
    `items?page=${pageCount}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=desc`;
