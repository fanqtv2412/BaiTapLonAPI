import axios from "axios";
import { useState } from "react";

const ForgotPassword = ()=>{
    const [email, setEmail] = useState("");
    const changeMailValue = (e) =>{
        setEmail(e);
    }
    const getUserByEmail = async(a)=>{
        
        const response = await axios.get("https://localhost:44334/api/User?Email=" + a);
        console.log(response);
        return response.data;  
    }

    const getVerificationCode = async(a)=>{
        const response = await axios.get("https://localhost:44334/resetpassword?email=" + a); 
        return response;
    }

    const Process =  async()=>{
        const data = await getUserByEmail(email);
        console.log(data);
        if(data.Email != email){
            return(
                alert("Cannot find this email")
            )
        }
        else{
            getVerificationCode(email);
            window.location.assign('/Verify');
        }
    }

    return(
        <div class="container padding-bottom-3x mb-2 mt-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    <div class="forgot">
                        <h2>Forgot your password?</h2>
                        <p>Change your password in three easy steps. This will help you to secure your password!</p>
                        <ol class="list-unstyled">
                            <li><span class="text-primary text-medium">1. </span>Enter your email address below.</li>
                            <li><span class="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
                            <li><span class="text-primary text-medium">3. </span>Use the link to reset your password</li>
                        </ol>
                    </div>
                    <form class="card mt-4">
                        <div class="card-body">
                            <div class="form-group"> <label for="email-for-pass">Enter your email address</label> <input onChange={(e)=>changeMailValue(e.target.value)} class="form-control" type="text" id="email-for-pass" required=""/><small class="form-text text-muted">Enter the email address you used during the registration on my website. Then we'll email a link to this address.</small> </div>
                        </div>
                        
                    </form>
                    <div class="card-footer"> 
                        <button onClick={Process} class="btn btn-success" type="submit">Get New Password</button> 
                        <button class="btn btn-danger" type="submit">Back to Login</button> 
                    </div>
                </div>
            </div>
	    </div>
    )
}

export default ForgotPassword;