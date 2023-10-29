type Sort = {
    name: string;
    sortProperty: string;
};

interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    pageCount: number;
    sort: Sort;
}

export const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
};
