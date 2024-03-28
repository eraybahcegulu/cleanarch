import { RiDeleteBinLine } from 'react-icons/ri'
import { useMutation, useQueryClient,  } from 'react-query';
import { deleteProductservice,  } from '../services/productService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import {LoadingIcon} from "./Loading";

const DeleteProduct = ({ id }: { id: string }) => {
    const queryClient = useQueryClient()
    const deleteProductMutation = useMutation('deleteProduct', deleteProductservice,

    {
        onSuccess: async () => {
            await queryClient.invalidateQueries('products')
            toast.success("Product deleted successfully");
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
            deleteProductMutation.isLoading
            ?
            <LoadingIcon size={'25'} />
            :
            <RiDeleteBinLine onClick={() => deleteProductMutation.mutate({ id }) } className="hover:scale-105 hover:opacity-70 cursor-pointer transition-all text-red-600" />
        }
        </>

    )
}

export default DeleteProduct