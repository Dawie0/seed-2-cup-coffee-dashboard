import { useContext, useEffect } from 'react'
import { OrderContext } from '../contexts/OrdersContext'
import { useNavigate } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    const { logIn, loggedIn } = useContext(OrderContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    }, [loggedIn])

    const handleSubmit = (event) => {
        event.preventDefault();
        logIn()
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Sign in</p>
                <div className="input-container">
                    <input type="email" placeholder="Enter email" />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="submit">
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default Login