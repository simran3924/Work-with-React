import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Make sure Provider is imported from 'react-redux'
import { Provider } from 'react-redux' 

// 2. Make sure you are importing your configured store
import { store } from './app/store.js' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Ensure store is passed as a prop exactly like this */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)