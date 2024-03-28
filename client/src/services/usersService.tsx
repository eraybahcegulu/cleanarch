import axios from "axios";
import { USER_API_URL } from "../constants/apiUrls";
import { IRegister, ILogin } from "../types";

const registerService = async (user: IRegister ) => {
    return await axios.post(

        USER_API_URL,

        user

    );
};

const loginService = async (user: ILogin ) => {
    return await axios.post(

        `${USER_API_URL}/Login`,

        user

    );
};

export {
    registerService,
    loginService
};