import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState('')
  const [userName, setuserName]= useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState()
  const [webSite,setWebsite] = useState('')

  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault();
     axios.post(`https://66fbcfe28583ac93b40d5390.mockapi.io/yes/users`,{name:name, username:userName, email:email, number:number, website:webSite }).then(()=>{
      navigate('/')
     })

  }


  console.log(name,userName,email,number,webSite)
  return (
    <div className=''>
    
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     Name
    </label>
    <input
      type="text"
      className="form-control"
      onChange={(e)=> setName(e.target.value)}

    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      UserName
    </label>
    <input
      type="text"
      className="form-control"
      onChange={(e)=> setuserName(e.target.value)}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
     onChange={(e)=> setEmail(e.target.value)}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     Phone
    </label>
    <input
      type="number"
      className="form-control"
      onChange={(e)=> setNumber(e.target.value)}
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
WebSite
    </label>
    <input
      type="email"
      className="form-control"
     onChange={(e)=> setWebsite(e.target.value)}
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>

    
  )
}

export default Create
