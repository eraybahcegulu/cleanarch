import axios from "axios";
import { CREATE_PRODUCT_API_URL, DELETE_PRODUCT_API_URL, GET_PRODUCTS_API_URL } from "../constants/apiUrls";
import { ICreateProduct, IDeleteProduct } from "../types";

const getProductsService = async (page: number, size: number) => {
    return await axios.get(

        `${GET_PRODUCTS_API_URL}?Page=${page}&Size=${size}`

    );
};

const createProductService = async (product: ICreateProduct) => {
    return await axios.post(

        CREATE_PRODUCT_API_URL,

        product,

    )
}

const deleteProductservice = async (product: IDeleteProduct) => {
    return await axios.delete(
        `${DELETE_PRODUCT_API_URL}/${product.id}`,
    )
}

export {
    getProductsService,
    createProductService,
    deleteProductservice
};