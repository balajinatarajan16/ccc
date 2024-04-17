import axios from "axios";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";





export default function Signup(){

    const [username,setusername]= useState('');
    const [password,setpassword]= useState('');
    const [dob,setdob]= useState('');
    const [email,setemail]= useState('');
    const [phone,setphone]= useState('');

    const handlesubmit=(event)=>{
        event.preventDefault();
       

        axios.post('http://localhost:3003/Registration',{username,password,dob,email,phone})
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Error12');
                window.location.href="./";
            }
            else if(response.data.status === 'Email already exists'){
                alert('email exists');
                window.location.href="./";
            }
            else if(response.data.status === 'success'){
                alert('Successfully Registered');
                window.location.href="./";
            }
            else{
                alert('Contact Admin');
                window.location.href="./";
            }
        })
        .catch(function(error){
            alert('Error');
            window.location.href="./";
        })

    }
    return(
        <>
         <div className="container-fluid">
            <div className="row">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6">
            <form onSubmit={handlesubmit}>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center text-success text-b bg-danger">Registration Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='bg-success'><label >Username</label></td>
                                <td>
                                    <input type="text" name="username" value={username}  onChange={(e) => setusername(e.target.value)} className="form-control bg-secondary  text-primary"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='bg-danger'><label>Password</label></td>
                                <td>
                                    <input type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control  bg-secondary text-primary"/>
                                </td>
                            </tr>
                            
                           
                            <tr>
                                <td className='bg-success'><label>DOB</label></td>
                                <td>
                                    <input type="date" name="dob" value={dob} id="date_of_birth" onChange={(e) => setdob(e.target.value)} className="form-control bg-dark text-primary"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='bg-success'><label>Email ID</label></td>
                                <td>
                                    <input type="email" name="email" value={email} id="email" onChange={(e) => setemail(e.target.value)} className="form-control  bg-secondary text-primary"/>
                                </td>
                            </tr>
                            <tr>
                                <td className='bg-warning'><label>Phone</label></td>
                                <td>
                                    <input type="number" name="phone" value={phone} id="phone" onChange={(e) => setphone(e.target.value)} className="form-control  bg-secondary text-light"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} >
                                    <button type="submit" name="data_submit" id="data_submit"value="submit" className="btn btn-primary">Register</button>&nbsp;
                                    <Link to="/Signin">
                                    <button type="button" className="btn btn-warning ">Login</button>
                                    </Link>&nbsp;
                                    <Link to="/">
                                    <button type="button" className="btn btn-danger ">Back</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </form>
            </div>
            <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        
        
        </>
    )
}