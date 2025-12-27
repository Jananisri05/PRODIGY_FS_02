import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([])
   
  useEffect(()=>{
    axios.get('http://localhost:3001/')
    .then(result =>setUsers(result.data))
    .catch(err=> console.log(err))
  },[])
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>
            {console.log(res);
            window.location.reload();
            })

        .catch(err=>console.log(err))
  };
  return (
    <div className="users-page">
      <div className="users-card">
        <div className="users-header">
          <h2>Users</h2>
          <Link to="/create" className="add-btn">
            Add +
          </Link>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={'/update/'+user._id} className="up-btn">Update</Link>

                  <button className="delete-btn" onClick={(e)=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
