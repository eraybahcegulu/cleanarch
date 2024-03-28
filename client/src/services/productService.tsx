import axios from "axios";
import { PRODUCT_API_URL } from "../constants/apiUrls";
import { ICreateProduct, IDeleteProduct, IUpdateProduct } from "../types";

const getProductsService = async (page: number, size: number) => {
    return await axios.get(

        `${PRODUCT_API_URL}?Page=${page}&Size=${size}`

    );
};

const createProductService = async (product: ICreateProduct) => {
    return await axios.post(

        PRODUCT_API_URL,

        product,

    )
}

const deleteProductservice = async (product: IDeleteProduct) => {
    return await axios.delete(
        `${PRODUCT_API_URL}/${product.id}`,
    )
}

const updateProductService = async (product: IUpdateProduct) => {
    return await axios.put(

        PRODUCT_API_URL,

        product,

    )
}

export {
    getProductsService,
    createProductService,
    deleteProductservice,
    updateProductService
};