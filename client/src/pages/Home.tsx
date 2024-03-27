import CreateProductForm from '../components/CreateProductForm';
import ProductsTable from '../components/ProductsTable';


const Home = () => {

    return (
        <div className='min-h-screen max-h-screen p-20 flex items-start justify-center'>
            <div className='flex flex-row gap-5'>
                <CreateProductForm/>
                <ProductsTable/>
            </div>
        </div>
    );
}

export default Home;