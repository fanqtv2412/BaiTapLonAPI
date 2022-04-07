import axios from "axios";
import React, { useState } from "react";
const Verify = ()=>{
    const [code, setCode] = useState("");
    const changeCode=(e)=>{
        setCode(e)
    }
    const getVerificationCode = async(a)=>{
        
        const response = await axios.get("https://localhost:44334/resetpassword?email=" + a);
        
        return response;
    }
    const checkVerificationCode = () =>{
        const data = getVerificationCode(code)
        console.log(data)
    }


    return(
        <div>
            <label>enter your verification code</label>
            <input onChange={(e) => changeCode(e.target.value)}  class="form-control" type="text" id="email-for-pass" required=""/>
            <button onClick={checkVerificationCode}>Verify</button>
        </div>
    )
}
export default Verify;