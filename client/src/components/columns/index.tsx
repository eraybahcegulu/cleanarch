import { TableColumnsType } from "antd";
import { Product } from "../../types/index";

export const productColumns: TableColumnsType<Product> = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: '15%',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
        width: '10%',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        width: '10%',
    },
    {
        title: 'Created Date',
        dataIndex: 'createdDate',
    },
    {
        title: 'Updated Date',
        dataIndex: 'updatedDate',
    },
];