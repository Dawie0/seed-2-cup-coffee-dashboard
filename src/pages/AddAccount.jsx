

const AddAccount = () => {
    return (
        <div className="form-box">
            <form className="form">
                <p className="form-title">Register Account</p>
                <div className="input-container">
                    <input type="email" className="input" placeholder="Email" />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input type="password" className="input" placeholder="Password" />
                    <span>
                    </span>
                </div>
                <div className="input-container">
                    <input type="password" className="input" placeholder="Re-enter Password" />
                    <span>
                    </span>
                </div>
                <button type="submit" className="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default AddAccount