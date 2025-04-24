import React, { useState } from 'react'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [pswd,setPswd] = useState("")
    let [age,setAge] = useState(0)
function clear(){
    setName();
    setEmail();
    setPswd();
    setAge();
}
async function save_data (){
    try {
        let pswd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{};:,<.>]).{8,}$/
        let username_regex =/^[a-zA-Z0-9._-]{3,16}$/
        if (!name || !email || !pswd || age === 0){
            toast.error("All fields are required");
        }
        else if (!pswd_regex.test(pswd)){
            toast.error("Password invalid")
        }
        else if(!username_regex.test(name)){
            toast.error("Username invalid")
        }
        else if(age < 18){
            toast.error("Age must be or greater than 18")
        }
        else {
            await axios.post("http://localhost:8007/Web/reg",{
                name:name,
                email:email,
                password:pswd,
                age:age
            })
            console.log("data save successfully")
            toast.success("Data Added Successfully")
            clear()
        }    
    } catch (error) {
        if(error.status === 409){
            toast.error("Email already exist")
        }
        else {
            toast.error(error)
            console.log(error)
        }
        
    }
}

  return (
    <div className='container'>
        <h2>User Registration Form</h2>
        <p>Enter your name</p>
        <input type="text" 
        placeholder='Enter your Name'
        className="form-control my-2" 
        value={name}
        onChange={(e)=>setName(e.target.value)}/>

        <p>Enter your Email</p>
        <input type="text" 
        placeholder='Enter your email'
        className="form-control my-2" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <p>Enter your Password</p>
        <input type="password" 
        placeholder='Enter your password'
        className="form-control my-2" 
        value={pswd}
        onChange={(e)=>setPswd(e.target.value)}/>

        <p>Enter your Age</p>
        <input type="number" 
        placeholder='Enter your age'
        className="form-control my-2" 
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>

        <button className='btn btn-primary' onClick={save_data}>Register</button>
        <ToastContainer/>
    </div>
  )
}
