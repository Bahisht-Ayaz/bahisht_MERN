import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowData() {
    let [userdata,setUserData] = useState([])
    let [na,setNa] = useState("")
    let [em,setEm] = useState("")
    let [id,setId] = useState("")
    let [age,setAge] = useState(0)
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
         if(window.confirm("Are you sure you want to delete this record")){
           await axios.delete(` http://localhost:8007/Web/user/${id}`).then(()=>{
             datalao();
             toast.info("Record Delete Sucessfully")
           })
         }
        } catch (error) {
         
        }
       }
       function fetchData(a,b,c,d){
        setNa(a)
        setEm(b)
        setAge(c)
        setId(d)
       }

       async function Edits(){
       try {
        await axios.put(` http://localhost:8007/Web/user/${id}`,{
            name : na,
            email : em,
            age:age
        }).then((e)=>{
            datalao();
            toast.success(e.data.msg)
            document.querySelector(".bahisht").click()
          })
       } catch (error) {
        toast.error(error.response.data.msg)
       }}
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
                    <button className='btn btn-danger btn-sm' onClick={()=>{remove(a._id)}}><i class="bi bi-trash3"></i></button>
                    <button className='btn btn-success btn-sm' data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" onClick={()=>fetchData(a.name,a.email,a.age)}><i class="bi bi-pen"></i></button>
                </div>
            </div>
            </div>
        ))
        }

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Record</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" className='form-control mt-2' value={na} onChange={(e)=>setNa(e.target.value)}/>
        <input type="text" className='form-control mt-2' value={em} onChange={(e)=>setEm(e.target.value)}/>
        <input type="number" className='form-control mt-2' value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary bahisht" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={Edits}>Save</button>
      </div>
    </div>
  </div>
</div>
     </div>
    </div>
  )
}
