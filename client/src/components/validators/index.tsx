import * as Yup from "yup";

export const createProductValidator = Yup.object({
        name: Yup.string()
                .trim()
                .required("Name required to create product")
                .min(5, "Name must be at least 5 characters")
                .max(50, "Name must be at most 50 characters"),

        stock: Yup.number()
                .typeError("Stock must be a number")
                .required("Stock required to create product")
                .min(0, "Stock must be 0 or greater"),

        price: Yup.number()
                .typeError("Price must be a number")
                .required("Price required to create product")
                .min(0, "Price must be 0 or greater"),
});

export const updateProductValidator = Yup.object({
        name: Yup.string()
                .trim()
                .required("Name required to create product")
                .min(5, "Name must be at least 5 characters")
                .max(50, "Name must be at most 50 characters"),

        stock: Yup.number()
                .typeError("Stock must be a number")
                .required("Stock required to create product")
                .min(0, "Stock must be 0 or greater"),

        price: Yup.number()
                .typeError("Price must be a number")
                .required("Price required to create product")
                .min(0, "Price must be 0 or greater"),
});

export const registerValidator = Yup.object({
        nameSurname: Yup.string()
                .required("Name and Surname required to register"),

        username: Yup.string()
                .required("Username required to register"),

        email: Yup.string()
                .email("Invalid email format")
                .required("Email required to register"),

        password: Yup.string()
                .required("Password required to register"),

        passwordConfirm: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm Password required to register"),
});

export const loginValidator = Yup.object({
        usernameOrEmail: Yup.string().required("Username or Email required to login"),
        password: Yup.string().required("Password required to login"),
});