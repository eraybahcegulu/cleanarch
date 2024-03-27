import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
