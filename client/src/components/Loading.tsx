import { Button } from '@nextui-org/react'
import { bouncy } from 'ldrs'

export const LoadingButton = ({ color, className }: { color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined, className: string | undefined }) => {
    return (
        <Button color={color} isLoading className={className}></Button>
    )
}

export const LoadingIcon = ({size}: {size: string}) => {
    bouncy.register()

    return (
        <l-bouncy
            size={size}
            speed="1.75"
            color="black"
        ></l-bouncy>
    )
}

