import { Button } from '@nextui-org/react'
import {Result } from 'antd'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen max-h-full p-20 flex justify-center items-center ">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => navigate('/')} color='primary'>Back Login</Button>}
            />
        </div>
    )
}

export default NotFound