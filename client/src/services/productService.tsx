import axios from "axios";
import { GET_PRODUCTS_API_URL } from "../constants/apiUrls";

const getProductsService = async (page: number, size: number) => {
    return await axios.get(

        `${GET_PRODUCTS_API_URL}?Page=${page}&Size=${size}`

    );
};

export {
    getProductsService,
};