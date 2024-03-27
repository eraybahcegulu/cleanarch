
import CreateProduct from '../components/CreateProduct';
import GetProducts from '../components/GetProducts';

const Home = () => {


    return (
        <div className='min-h-screen max-h-screen p-20 flex items-start justify-center'>
            <div className='flex flex-row gap-5'>
                <CreateProduct/>
                <GetProducts />
            </div>
        </div>

    );
}



export default Home;
