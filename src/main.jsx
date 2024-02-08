import ReactDOM from 'react-dom/client'
import { OrderContextProvider } from './contexts/OrdersContext'
import App from './App.jsx'
import './index.css'

export const Main = () => {
  return (
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Main />
)
