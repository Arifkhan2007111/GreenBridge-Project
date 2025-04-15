import React, { useState } from "react";
import { app } from "../firebase.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(app)

const Login = () =>{

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
    return(
        <>
            <div className="login">
                <form>
                    <input onChange={(e) =>{setEmail(e.target.value)}} value={email} placeholder="Enter Your Email" type="email"></input>
                    <input onChange={(e) =>{SetPassword(e.target.value)}} value={password} placeholder="Enter Your Password" type="password"></input>
                    <button onClick={signup}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login