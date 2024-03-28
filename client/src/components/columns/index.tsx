import { TableColumnsType } from "antd";
import { IProduct } from "../../types/index";
import { RiEditLine } from "react-icons/ri";
import DeleteProduct from "../DeleteProduct";

export const productsTableColumns: TableColumnsType<IProduct> = [
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
    {
        title: 'Actions',
        width: '12%',
        render: (_, record: IProduct) => (
            <div className='flex flex-row justify-between text-2xl h-full w-full max-h-full'>
                <RiEditLine onClick={() => console.log(record.id)} className="hover:scale-105 hover:opacity-70 cursor-pointer transition-all text-blue-600" />
                <DeleteProduct id={record.id}  />
            </div>
        ),
    },
];