import { Button } from '@nextui-org/react'
import { Result } from 'antd'
import { useNavigate } from 'react-router-dom';

const NotAuth = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen max-h-full p-20 flex justify-center items-center ">
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={
                    <Button onClick={() => {
                        localStorage.clear();
                        navigate('/');
                    }} color='primary'>
                        Back Login
                    </Button>
                }
            />
        </div>
    )
}

export default NotAuth