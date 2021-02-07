import axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom"

const Userform = () => {
    let history = useHistory();
    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');

    const submitHandler = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",{fname, mname, lname});
        history.push("/userlist");
    }
/*
    const [user, setUser] = useState({
        firstname:"",
        middlename:"",
        lastname:""
    });

    const {firstname, middlename, lastname} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.firstname]: e.target.value});
    }*/
    return (
        <>
            <div className="container">
                <div className="py-4">
                   <div className="w-75 mx-auto shadow p-5">
                       <h2 className="text-center mb-4">Add User</h2>
                       <form onSubmit={submitHandler}>
                           <div className="form-group pb-3">
                             <input type="text" name="firstname" 
                             onChange={(e)=> setFname(e.target.value)}
                             className="form-control form-control-lg" 
                             placeholder="Enter First Name"/>
                           </div>

                           <div className="form-group pb-3">
                             <input type="text" name="middlename"  
                             onChange={(e)=> setMname(e.target.value)}
                             className="form-control form-control-lg"
                            placeholder="Enter Middle Name"/>
                           </div>

                           <div className="form-group pb-3">
                             <input type="text" name="lastname" 
                             onChange={(e)=> setLname(e.target.value)}
                             className="form-control form-control-lg" 
                             placeholder="Enter Last Name"/>
                           </div>
                           <button className="btn btn-primary">Add User</button>
                       </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userform;