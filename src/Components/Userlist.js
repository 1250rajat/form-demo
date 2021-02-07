import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Userlist = () =>{

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);
    }


    return(
        <>
        <div className="container">
        <div className="py-4">
            <Link to="/">
        <button className="btn btn-primary">Back to Form</button></Link>
       <h1 className="text-center">User List</h1>
       <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                           {users.map((user,index)=>(
                               <tr>
                                   <th scope="row">{index + 1}</th>
                                   <td>{user.fname}</td>
                                   <td>{user.mname}</td>
                                   <td>{user.lname}</td>
                               </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Userlist;