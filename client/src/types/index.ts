export interface Product {
    id: string;
    name: string;
    stock: number;
    price: number;
    createdDate: string;
    updatedDate: string;
}

export interface ProductTable {
    data: {
        data: {
            products: Product[];
            totalCount: number;
        };
    }

    isFetching: boolean;
}