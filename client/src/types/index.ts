export interface IProduct {
    id: string;
    name: string;
    stock: number;
    price: number;
    createdDate: string;
    updatedDate: string;
}

export interface ICreateProduct {
    name: string;
    stock: number;
    price: number;
}

export interface IErrorResponse {
    Errors: string[];
}
