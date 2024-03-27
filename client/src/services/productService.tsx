import axios from "axios";
import { GET_PRODUCTS_API_URL } from "../constants/apiUrls";

const getProductsService = async (page: number, size: number) => {
    const url = `${GET_PRODUCTS_API_URL}?Page=${page}&Size=${size}`;
    return await axios.get(url);
};

export {
    getProductsService,
};