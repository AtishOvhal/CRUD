import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://66fbcfe28583ac93b40d5390.mockapi.io/yes/users')
      .then((res) => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light '>
      <h1>List Of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className="d-flex justify-content-end">
           <Link to={'/create'}>
          <button className='btn btn-success'> Add +</button>
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, id) => (
              <tr key={id} className=''>
                {console.log(id)}
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.website}</td>
                <td >
                  <div className="d-flex gap-1">
                  <Link to={`/read/${value.id}`} className='btn btn-info'>Read </Link>
                  <button className='btn btn-primary'>Edit</button>
                  <button className='btn btn-danger'>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
