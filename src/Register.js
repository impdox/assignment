import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from "./Header"
function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    },[]);
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const history = useHistory();

    async function SignUp() {
        let item = { name,Email,password, Phone }
        console.warn(item)

        let result = await fetch("https://reqres.in/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/add")
    }
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Register User</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
                <br />
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your Email" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your Password" />
                <br />
                <input type="tel" value={Phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter your Phone Number" />
                <br />
                <button onClick={SignUp} className="btn btn-primary">SignUp</button>
            </div>
        </>
    )
}

export default Register