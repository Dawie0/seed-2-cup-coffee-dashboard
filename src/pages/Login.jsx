
import '../styles/login.css'

const Login = () => {

    return (
        <div>
            <form className="form">
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