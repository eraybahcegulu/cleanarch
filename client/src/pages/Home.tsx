import { Table, type TableColumnsType, type TableProps } from 'antd';
import { Product } from "../types";
import { useQuery, useQueryClient } from 'react-query';
import { getProductsService } from '../services/productService';
import { useState } from 'react';

const columns: TableColumnsType<Product> = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: '30%',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        width: '40%',
    },
    {
        title: 'Created Date',
        dataIndex: 'createdDate',
        width: '40%',
    },
    {
        title: 'Updated Date',
        dataIndex: 'updatedDate',
        width: '40%',
    },
];



const Home = () => {
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
        return <div>Loading...</div>;
    }

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error</div>;
    }

    return (

        <Table
            rowKey="id"
            columns={columns}
            dataSource={data.data.products}
            pagination={{
                pageSize: 5,
                total: data.data.totalCount,
                current: currentPage + 1,
            }}
            onChange={onChange}
        />


    );
}


export default Home;
