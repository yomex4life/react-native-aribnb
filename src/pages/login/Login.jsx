import "./login.css"
import { useRef, useContext } from "react";
import {loginCall} from '../apiCalls'
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core/"

export default function Login() {
    const email = useRef();
    const password = useRef();

    const {user, isFetching, dispatch} = useContext(AuthContext);

    const handleRegister =(e)=>{
        e.preventDefault()
        loginCall({email:email.current.value, password:password.current.value}, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">Connect with friends and world around you</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleRegister}>
                        <input placeholder="Email" type="email" required minLength="6" className="loginInput" ref={email}/>
                        <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password}/>
                            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px"/>: "Login"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
