import { RiDeleteBinLine } from 'react-icons/ri'
import { useMutation, useQueryClient, } from 'react-query';
import { deleteProductservice, getProductsService, } from '../services/productService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { LoadingIcon } from "./Loading";
import { usePaginationStore } from '../zustand/ProductsPagination'
import { useState } from 'react';
import { IProduct } from '../types';

interface ProductData {
    data: {
        products: IProduct[];
        totalCount: number;
    };
}

const DeleteProduct = ({ id }: { id: string }) => {
    const queryClient = useQueryClient()
    const { currentPage, setCurrentPage } = usePaginationStore();0
    const [checking, setChecking] = useState<boolean>(false);

    const checkLastProduct = async () => {
        setChecking(true);
        const data: ProductData = await queryClient.fetchQuery('products');
        console.log(data)
        if (data.data.products.length === 0 && data.data.totalCount !== 0) {
            await queryClient.fetchQuery('products', () => getProductsService(currentPage - 1, 5));
            setCurrentPage(currentPage - 1)
        }
        setChecking(false);
    }

    const deleteProductMutation = useMutation('deleteProduct', deleteProductservice,
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('products');
                toast.success("Product deleted successfully");
                await checkLastProduct();
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
            {
                deleteProductMutation.isLoading || checking
                    ?
                    <LoadingIcon size={'25'} />
                    :
                    <RiDeleteBinLine onClick={() => deleteProductMutation.mutate({ id })} className="hover:scale-105 hover:opacity-70 cursor-pointer transition-all text-red-600" />
            }
        </>

    )
}

export default DeleteProduct