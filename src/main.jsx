import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ClientQuery } from './config/QueryClient.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './global/index.css'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <QueryClientProvider client={ClientQuery}>
      <App />
    </QueryClientProvider>
  </Provider>
  </BrowserRouter>,
)
