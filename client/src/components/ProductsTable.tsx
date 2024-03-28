import { Table, type TableProps } from 'antd';
import { useState } from 'react'
import { productsTableColumns } from './columns/index';
import { IProduct } from '../types';
import { useQuery, useQueryClient } from 'react-query';
import { getProductsService } from '../services/productService';
import LoadingSpinner from './LoadingSpinner';
import { usePaginationStore } from '../zustand/ProductsPagination'

const ProductsTable = () => {
    const { data, isLoading, isFetching} = useQuery('products', () => getProductsService(currentPage, 5));
    const [pageChanging, setIsPageChanging] = useState<boolean>(false);
    const queryClient = useQueryClient()
    const { currentPage, setCurrentPage} = usePaginationStore();


    const handlePage = async (page: number) => {
        setIsPageChanging(true);
        setCurrentPage(page);
        await queryClient.fetchQuery('products', () => getProductsService(page, 5));
        setIsPageChanging(false);
    }

    const onChange: TableProps<IProduct>['onChange'] = async (pagination, filters, sorter, extra) => {
        if (pagination.current !== undefined) {
            await handlePage(pagination.current - 1);
        }
        console.log('params', pagination, filters, sorter, extra);
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!data) {
        return <div>Error</div>;
    }

    return (
        <Table
            rowKey="id"
            columns={productsTableColumns}
            dataSource={data.data.products}
            pagination={{
                pageSize: 5,
                total: data.data.totalCount,
                current: currentPage + 1,
            }}
            className="max-w-[475px] md:max-w-[750px] xl:max-w-[900px]"
            scroll={{ y: 630, x: 800 }}
            onChange={onChange}
            loading={pageChanging || isFetching}
        />
    )
}

export default ProductsTable