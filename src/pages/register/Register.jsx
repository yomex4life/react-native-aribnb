import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with friends and world around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Firstname" className="loginInput" />
                        <input placeholder="Lastname" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
