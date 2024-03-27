import axios from "axios";
import { CREATE_PRODUCT_API_URL, GET_PRODUCTS_API_URL } from "../constants/apiUrls";
import { ICreateProduct } from "../types";

const getProductsService = async (page: number, size: number) => {
    return await axios.get(

        `${GET_PRODUCTS_API_URL}?Page=${page}&Size=${size}`

    );
};

const createProductService = async (data: ICreateProduct) => {
    return await axios.post(

        CREATE_PRODUCT_API_URL,

        data,

    )
}


export {
    getProductsService,
    createProductService
};