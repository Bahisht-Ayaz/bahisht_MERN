import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
  return (
    <div className='container'>
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
                </div>
            </div>
            </div>
        ))
        }
     </div>
    </div>
  )
}
