import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams("");

  useEffect(() => {
    console.log(`id from param: ${id}`);
    if (id) {
      axios
        .get(`https://66fbcfe28583ac93b40d5390.mockapi.io/yes/users/${id}`)

        .then((res) => setData(res.data))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="d-flex w-100 justify-content-center align-items-center vh-100">
      
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <div className="mb-2">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Username: {data.username}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className="d-flex justify-content-between mt-5">
        <Link to={`/update/${id}`} className="btn btn-success"> Edit</Link>
        <Link to={`/`} className="btn btn-primary"> Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
