import "./register.css"
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Register() {
    const email = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const baseUrl = "http://localhost:5000/api"
    const history = useHistory()

    const handleRegister = async (e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value)
        {
            password.current.setCustomValidity("Passwords don't match")
        }
        else {
            const user = {
                email: email.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                password: password.current.value,
            }
            try {
                 await axios.post(`${baseUrl}/users/register`, user)
                 history.push("/login")
            } catch (error) {
                console.log(error.response)
            }
            
        }
    }


    return (
        <div className="register">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with friends and world around you</span>
                </div>
                <div className="loginRight">
                    <form className="registerBox" onSubmit={handleRegister}>
                        <input placeholder="Email" required type="email" ref={email} className="loginInput" />
                        <input placeholder="Firstname" required ref={firstName} className="loginInput" />
                        <input placeholder="Lastname" required ref={lastName} className="loginInput" />                        
                        <input placeholder="Password" type="password" required minLength="6" ref={password} className="loginInput" />
                        <input placeholder="Password Again" type="password" required minLength="6" ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
