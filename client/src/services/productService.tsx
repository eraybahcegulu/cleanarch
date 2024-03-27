import axios from "axios";
import { CREATE_PRODUCT_API_URL, GET_PRODUCTS_API_URL } from "../constants/apiUrls";
import { CreateProduct } from "../types";

const getProductsService = async (page: number, size: number) => {
    return await axios.get(

        `${GET_PRODUCTS_API_URL}?Page=${page}&Size=${size}`

    );
};

const createProductService = async (data: CreateProduct) => {
    return await axios.post(

        CREATE_PRODUCT_API_URL,

        data,
        
    )
}


export {
    getProductsService,
    createProductService
};