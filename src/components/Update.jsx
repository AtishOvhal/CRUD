import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams("");

  const [value,  setValue] = useState({
    name: "", 
    email: "",
    phone: "",
    username:"",
    website:""

  })
  const navigate = useNavigate()



  useEffect(() => {
    console.log(`id from param: ${id}`);
    if (id) {
      axios
        .get(`https://66fbcfe28583ac93b40d5390.mockapi.io/yes/users/${id}`)

        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.put(`https://66fbcfe28583ac93b40d5390.mockapi.io/yes/users/${id}` , value).then(res => {
      console.log(res)
      navigate('/')
    }).catch(err => console.log(err))
    
  }


  return (
    <div>
 
      <div className="d-flex w-100 justify-content-center align-items-center vh-100">
    
        
      <form onSubmit={handleSubmit} >
  <div className="mb-3">
  <h1>Update User</h1>
    <label htmlFor="exampleInputEmail1" className="form-label">
     Name
    </label>
    <input
      type="text"
      className="form-control"
      value={data.name}
      onChange={(e) => setValue({ ...value, name: e.target.value })}
    

    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      UserName
    </label>
    <input
      type="text"
      className="form-control"
      value={data.username}
      onChange={(e)=> setValue({...value, username:e.target.value})}

  
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      value={data.email}
      onChange={(e)=> setValue({...value,  email:e.target.value})}

 
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     Phone
    </label>
    <input
      type=""
      className="form-control"
      value={data.phone}
      onChange={(e)=> setValue({...value,  phone:e.target.value})}

     
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
WebSite
    </label>
    <input
      type="email"
      className="form-control"
      value={data.website}
      onChange={(e)=> setValue({...value, website: e.target.value})}
   
    />
  </div>
<div className="d-flex justify-content-between">
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
  <Link to={'/'} className="btn btn-success">
    back
  </Link>
  </div>
</form>

      </div>
    </div>
  )
}

export default Update
