import { Button } from '@nextui-org/react'

const LoadingButton = ({ color, className }: { color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined, className: string | undefined }) => {
    return (
        <Button color={color} isLoading className={className}></Button>
    )
}

export default LoadingButton