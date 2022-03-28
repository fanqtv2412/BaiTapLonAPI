import React, { useState } from "react";
import { Link, Navigate, Outlet, Redirect } from "react-router-dom";

import axios from "axios";
import { render } from "@testing-library/react";

const Login = ()=>{

    const [email, setEmail] = useState("");
    const [pass, setPassWord] = useState("");
    const getUserByEmail = async(a)=>{
        
        const response = await axios.get("https://localhost:44334/api/User?Email=" + a);
        return response.data;  
    }
    
    const changeEmailValue  = (e)=>{
        setEmail(e)
    }
    const changePasswordValue =(e)=>{
        setPassWord(e)
    }
    const loginProcess = async()=>{
        const data = await getUserByEmail(email)
        if(data.Email != email) return(
            alert("Không tìm thấy tài khoản")
        )
        else if(data.Password == pass){
            window.location.assign("/Home")
        }
        
        else
        return(
            alert("Sai mật khẩu, vui lòng thử lại")
        )
    }

    return(
        <div>
            <h1 className="display-4">Login</h1>
            <div className="container pt-5 my-5 border">
            <form >
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input onChange={(e) => changeEmailValue(e.target.value)} id="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input  onChange={(e) => changePasswordValue(e.target.value)} className="form-control" placeholder="Enter password" name="password"/>
                </div>
            
            </form>
            <button onClick={loginProcess}  className="btn btn-primary" >Submit</button>
            <Link to={`/Register`}><button type="button" class="btn btn-info" >Register</button></Link>
            <Link to={`/ForgotPassword`}><button type="button" class="btn btn-info" >Forgot password?</button></Link>
            </div>
            
        </div>
        
    )
}
export default Login;