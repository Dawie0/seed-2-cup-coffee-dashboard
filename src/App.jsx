import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { OrderContextProvider } from './contexts/OrdersContext'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AddAccount from './pages/AddAccount'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-account" element={<AddAccount />} />
    </Routes>            
  </Router>
  )
}

export default App
