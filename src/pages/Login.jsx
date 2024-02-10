import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { OrderContext } from '../contexts/OrdersContext'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    const { logIn, loggedIn } = useContext(OrderContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    }, [loggedIn])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (email.trim() === '' || password.trim() === '') {
            alert('Invalid Credentials')
            return
        }
        else {
            try {
                const response = await axios.post(`https://seed2cupcoffee-backend-vercel-swart.vercel.app/login`, {
                    user: {
                        email: email,
                        password: password
                    }
                })
    
                const { token } = response.data
    
                localStorage.setItem('token', token)
            }
            catch (error) {
                console.error(`Error during login:`, error)
                alert('Error logging in! please try again later.')
                return
            }
            logIn()
        }     
    }

    return (
        <div  className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Sign in</p>
                <div className="input-container">
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>
            </form>
            
        </div>
    )
}

export default Login