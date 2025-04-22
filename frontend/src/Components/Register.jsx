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
function save_data (){
    try {
        axios.post("http://localhost:8007/Web/reg",{
            name:name,
            email:email,
            password:pswd,
            age:age
        })
        toast.success("Data Added Sucessfully");
        clear();
    } catch (error) {
        toast.error(error)
        console.log("error")
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
