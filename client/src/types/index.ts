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

export interface IDeleteProduct {
    id: string;
}

export interface IUpdateProduct {
    id: string;
    name: string;
    stock: number;
    price: number;
}

export interface IErrorResponse {
    Errors: string[];
}

export interface IRegister {
    nameSurname: string;
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export interface ILogin {
    usernameOrEmail: string;
    password: string;
}
export interface ErrorResponse {
    Errors: string[];
}