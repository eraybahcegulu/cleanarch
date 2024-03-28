import { RiEditLine } from 'react-icons/ri'
import { IProduct } from '../types'
import { Modal } from 'antd'
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Input } from '@nextui-org/react';
import { useMutation, useQueryClient } from 'react-query';
import { updateProductService } from '../services/productService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { LoadingButton } from './Loading';
import { updateProductValidator } from './validators';

const UpdateProductModal = ({ product }: { product: IProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const queryClient = useQueryClient()
    const updateProductMutation = useMutation('updateProduct', updateProductService,
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('products')
                toast.success("Product updated successfully");

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
        <>

            <RiEditLine onClick={showModal} className="hover:scale-105 hover:opacity-70 cursor-pointer transition-all text-blue-600" />

            <Modal className='flex justify-center items-center' title="Update Product" open={isModalOpen} onOk={handleOk} footer onCancel={handleCancel}>
                <Formik
                    initialValues={{ name: product.name, stock: product.stock, price: product.price }}
                    validationSchema={updateProductValidator}
                    onSubmit={async (values) => {
                        await updateProductMutation.mutateAsync({
                            id: product.id,
                            name: values.name,
                            stock: values.stock,
                            price: values.price,
                        });
                        handleCancel();
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
                                    <Field name="stock" type="number" as={Input} maxLength={20} variant='bordered' label="Stock" />
                                    <ErrorMessage name="stock" component="div" className="text-red-500 text-xs" />
                                </div>


                                <div>
                                    <Field name="price" type="number" as={Input} maxLength={20} variant='bordered' label="Price" />
                                    <ErrorMessage name="price" component="div" className="text-red-500 text-xs" />
                                </div>
                            </div>
                            {

                                updateProductMutation.isLoading
                                    ?
                                    <LoadingButton color='primary' className={undefined} />
                                    :
                                    <Button type='submit' color="primary" variant="shadow" >
                                        Update
                                    </Button>
                            }
                        </div>
                    </Form>
                </Formik>

            </Modal>
        </>
    )
}

export default UpdateProductModal