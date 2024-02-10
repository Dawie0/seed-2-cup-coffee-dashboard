import { useState } from "react"
import axios from "axios"

const AddAccount = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retypePassword, setRetypePassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if (password === retypePassword) {
                const response = await axios.post(`https://seed2cupcoffee-backend-vercel-swart.vercel.app/register`, {
                    user: {
                        email: email,
                        password: password
                    }
                })
                if (response.data.message) {
                    alert('Registration successful!')
                } 
            }
            else {
                alert('passwords do not match')
            }

        }
        catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        }
        // setEmail('')
        // setPassword('')
        // setRetypePassword('')
    }

    console.log(email, password, retypePassword)

    return (
        <div className="form-box">
            <form className="form" onSubmit={handleSubmit}>
                <p className="form-title">Register Account</p>
                <div className="input-container">
                    <input 
                        type="email" 
                        className="input" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        className="input" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span>
                    </span>
                </div>
                <div className="input-container">
            <input 
                type={showPassword ? 'text' : 'password'} 
                className="input" 
                placeholder="Re-enter Password" 
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? 'Hide' : 'Show'} Password
            </button>
        </div>
                <button type="submit" className="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default AddAccount