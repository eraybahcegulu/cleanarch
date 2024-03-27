import { Table, type TableProps } from 'antd';
import { productColumns } from './columns/index';
import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getProductsService } from '../services/productService';
import { Product } from '../types';
import LoadingSpinner from './LoadingSpinner';

const GetProducts = () => {

    const [currentPage, setCurrentPage] = useState<number>(0);
    const { data, isLoading, isFetching } = useQuery('products', () => getProductsService(currentPage, 5));
    const queryClient = useQueryClient()

    const handlePage = async (page: number) => {
        setCurrentPage(page);
        await queryClient.fetchQuery('products', () => getProductsService(page, 5));
    }

    const onChange: TableProps<Product>['onChange'] = async (pagination, filters, sorter, extra) => {
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
            columns={productColumns}
            dataSource={data.data.products}
            pagination={{
                pageSize: 5,
                total: data.data.totalCount,
                current: currentPage + 1,
            }}
            className="max-w-[475px] md:max-w-[750px] xl:max-w-[900px]"
            scroll={{ y: 630, x: 800 }}
            onChange={onChange}
            loading={isFetching}
        />
    )
}

export default GetProducts