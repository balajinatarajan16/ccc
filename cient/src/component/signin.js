

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function Signin(){
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    const handlesubmit = (event) =>{
        event.preventDefault();
        // var datastring = new FormData(event.target);
        // var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/login',{email,password})
        .then(function(response){
            if(response.data.status === 'email not valid'){
                alert('Query Error');
                window.location.href="./Signreg";
            } 
            else if(response.data.status === 'login success'){
              
       
                alert('Logined');
                window.location.href="./Dashboard";
            } 
            else if(response.data.status === 'not valid'){
                alert('Invalid username and password');
                window.location.href="./Signreg";
            } 
            else{
                alert('Contact Admin');
                window.location.href="./Signreg";
            }
        })
        .catch(function(error){
            alert('Error');
            window.location.href="./";
        })

    }

    return(
        <>
        <div className="container-fluid  ">
            <div className="row ">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6 mt-5">
                <form onSubmit={handlesubmit}>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center ">Login Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><label>Username</label></td>
                                <td>
                                    <input type="text" name="username" value={email} onChange={(e) => setemail(e.target.value)} id="username" className="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Password</label></td>
                                <td>
                                    <input type="text" name="password" value={password}  onChange={(e) => setpassword(e.target.value)} id="password" className="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="submit" name="data_submit" id="data_submit"
                                    value="submit" className="btn btn-primary">
                                        Sign-in
                                    </button>&nbsp;
                                    <Link to="/Signup">
                                    <button type="button" name="data_back" id="data_back"
                                    value="back" className="btn btn-danger">
                                        Go Back
                                    </button>
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