import React, { useState } from "react";
import { app } from "../firebase.js"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


const Login = () =>{
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();


    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")


    const signup = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, )
        .then((userCredential) => {
            console.log("User signed up:", userCredential.user);
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
    }

    const googleSignup = () =>{
        signInWithPopup(auth, googleProvider);

    }
    return(
        <>
            <div className="login">
                <h1>Login</h1>
                <form>
                    <input onChange={(e) =>{setEmail(e.target.value)}} value={email} placeholder="Enter Your Email" type="email"></input>
                    <input onChange={(e) =>{SetPassword(e.target.value)}} value={password} placeholder="Enter Your Password" type="password"></input>
                    <button className="button" onClick={signup}>Submit</button>
                </form>
                <p>or</p>
                <button onClick={googleSignup} className="button">Continue with Google</button>
            </div>
        </>
    )
}

export default Login