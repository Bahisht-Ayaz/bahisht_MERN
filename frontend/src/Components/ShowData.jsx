import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ShowData() {
    let [userdata,setUserData] = useState([])
    useEffect(()=> {
        datalao()
    },[])
    async function datalao() {
        await axios.get("http://localhost:8007/Web/user")
        .then((abc)=> {
         console.log(abc.data)
         setUserData(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    async function remove(id){
    try {
        if(window.confirm("Are you sure want to delete this record?")){
         await axios.delete(`http://localhost:8007/Web/user/${id}`).then(()=>{ 
         datalao();
         toast.info("Record Deleted Successfully")})
       
        }
    } catch (error) {
        toast.error(error.response.data.msg)
    }
    }
  return (
    <div className='container'>
        <ToastContainer/>
     <h1>User Data</h1>
     <hr />
     <div className='row'>
        {(userdata.length === 0) ? (
            <div className='col-md-12'>
         <div class="card">
            <div class="card-body">
                <h4 class="card-title text-danger">No User Found</h4>
            </div>
         </div>
         </div>
        ):
        userdata.map((a)=>(
            <div className='col-md-3 mt-2' key={a.id}>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">{a.name}</h4>
                    <p class="card-text">{a.email}</p>
                    <button className='btn btn-danger' onClick={()=>{remove(a._id)}}><i class="bi bi-trash3"></i></button>
                </div>
            </div>
            </div>
        ))
        }
     </div>
    </div>
  )
}
