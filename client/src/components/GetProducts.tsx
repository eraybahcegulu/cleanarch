import { useQuery } from 'react-query';
import { getProductsService } from '../services/productService';
import LoadingSpinner from './LoadingSpinner';
import ProductTable from './ProductTable';

const GetProducts = () => {
    const { data, isLoading, isFetching } = useQuery('products', () => getProductsService(0, 5));

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!data) {
        return <div>Error</div>;
    }

    return (
            <ProductTable isFetching={isFetching} data={data} />
    )
}

export default GetProducts