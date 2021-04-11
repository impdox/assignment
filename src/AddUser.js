import Header from "./Header"
import {useState} from 'react'
function Add()
{
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    
    async function AddUser()
    {
        console.warn(name,password,Email,Phone)
        const formdata= new FormData();
        formdata.append('name',name)
        formdata.append('Email',Email)
        formdata.append('password',password)
        formdata.append('Phone',Phone)
        let result=await fetch("https://reqres.in/api/users",{
            method: 'POST',
            body:formdata
        });
        alert("user has been added")
    }
    return(
        <div>
            <Header/>
            <h1>Add User</h1>
            <div className="col-sm-6 offset-sm-3">
                
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter your Name" />
                <br />
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your Email" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter your Password" />
                <br />
                <input type="tel" value={Phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter your Phone Number" />
                <br />
                <button onClick={AddUser} className="btn btn-primary">AddUser</button>
            </div>
        </div>
    )
}

export default Add