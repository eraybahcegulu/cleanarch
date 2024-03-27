import { quantum } from 'ldrs'

const LoadingSpinner = () => {
    quantum.register()
    return (
        <l-quantum size={30}>
        </l-quantum>
    )
}

export default LoadingSpinner