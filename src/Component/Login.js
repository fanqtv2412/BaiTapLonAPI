import React, { useState } from "react";
import { Link, Navigate, Outlet, Redirect } from "react-router-dom";

import axios from "axios";
import './Login.css';

const Login = ()=>{

    const [email, setEmail] = useState("");
    const [pass, setPassWord] = useState("");
    const getUserByEmail = async(a)=>{
        
        const response = await axios.get("https://localhost:44334/api/User?Email=" + a);
        console.log(response.data);
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
        if(data.IsDeleted == 1) return(
            alert("Do nhận thấy hành động phá hoại của bạn, chúng tôi đã khoá tài khoản này, vui lòng liên hệ để được nhận hỗ trợ")
        )
        else
        if(data.Email != email) return(
            alert("Không tìm thấy tài khoản")
        )
        else if(data.Password == pass && data.IsManagement == 1){
            window.location.assign("/Home/admin")
        }
        else if(data.Password == pass){
            window.location.assign("/Home")
        }
        
        else
        return(
            alert("Sai mật khẩu, vui lòng thử lại")
        )
    }

    return(
        <div className="main-container5">
            <div className="container pt-5 my-5 border">
            <h1 className="display-4">Login</h1>
            <form >
                <div className="mb-3 mt-3">
                    <label className="form-label">Email:</label>
                    <input onChange={(e) => changeEmailValue(e.target.value)} id="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input  onChange={(e) => changePasswordValue(e.target.value)} className="form-control" placeholder="Enter password" name="password" />
                </div>
            </form>
            <div className="three-button">
                <button onClick={loginProcess}  className="btn btn-success" >Login</button>
                <div className="regis">
                    <Link to={`/Register`}><button type="button" class="btn btn-info" >Register </button></Link>
                    <Link to={`/ForgotPassword`}><button type="button" class="btn btn-info" >Forgot password?</button></Link>
                </div>
            </div>
            </div>
        </div>
        
    )
}
export default Login;