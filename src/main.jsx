import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './Redux/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
<MantineProvider>
<Provider store={store}>
  <QueryClientProvider client={queryClient}><App /></QueryClientProvider>
  </Provider>
  </MantineProvider>
    
 
)
