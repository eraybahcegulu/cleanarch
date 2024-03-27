import { Formik, Field, Form, ErrorMessage, } from "formik";
import { Button, Input } from '@nextui-org/react';
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import { createProductService } from "../services/productService";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import LoadingButton from "./LoadingButton";


const createProductValidator = Yup.object({
    name: Yup.string().trim().required("Name required to create product"),
    stock: Yup.number().typeError("Stock must be a number").required("Price required to create product"),
    price: Yup.number().typeError("Price must be a number").required("Price required to create product"),
});

const CreateProduct = () => {
    const queryClient = useQueryClient()
    const createProductMutation = useMutation('createProduct', createProductService,
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('products')
                toast.success("Product created successfully");

            },
            onError: (error) => {
                const axiosError = error as AxiosError;
                if (axiosError.response && axiosError.response.data) {
                    const errorData = axiosError.response.data;
                    let errorMessage = 'error';
                    if (Array.isArray(errorData)) {
                        errorMessage = errorData.map((errorItem) => {
                            return errorItem.value[0];
                        }).join('\n');
                    }
                    toast.error(errorMessage);
                } else {
                    toast.error("Server Error");
                }
            }
        });

    return (
        <Formik
            initialValues={{ name: "", stock: "", price: "" }}
            validationSchema={createProductValidator}
            onSubmit={async (values) => {
                await createProductMutation.mutateAsync({
                    name: values.name,
                    stock: parseInt(values.stock),
                    price: parseFloat(values.price),
                });
            }}
        >
            <Form>
                <div className="flex flex-col gap-4 w-[300px]">
                    <div className="flex flex-col gap-2">
                        <div>
                            <Field name="name" as={Input} maxLength={20} variant='bordered' label="Name" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                        </div>

                        <div>
                            <Field name="stock" as={Input} maxLength={20} variant='bordered' label="Stock" />
                            <ErrorMessage name="stock" component="div" className="text-red-500 text-xs" />
                        </div>


                        <div>
                            <Field name="price" as={Input} maxLength={20} variant='bordered' label="Price" />
                            <ErrorMessage name="price" component="div" className="text-red-500 text-xs" />
                        </div>
                    </div>
                    {
                        createProductMutation.isLoading
                            ?
                            <LoadingButton color="primary" className={undefined} />
                            :
                            <Button type='submit' color="primary" variant="shadow" >
                                Create
                            </Button>
                    }
                </div>
            </Form>
        </Formik>
    )
}

export default CreateProduct;
