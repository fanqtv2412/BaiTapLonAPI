import React, { useState } from "react";
import axios from "axios";
const Register = ()=>{
    const[email, setEmail] = useState("");
    const[name, setName] = useState("");
    const[pass, setPassWord] = useState("");
    const createUser = async()=>{
    
        const body = {
            Email: email,
            Name: name,
            Password: pass
        }
        console.log(body);
        await axios.post("https://localhost:44334/api/User", body);
        window.location.assign('/Home')
    }

    const changeEmailValue=(e)=>{
        setEmail(e);
    }
    const changeNameValue=(e)=>{
        setName(e);
    }
    const changePasswordValue=(e)=>{
        setPassWord(e);
    }
    
    return(
        <div>
            <form action="action_page.php">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="email"><b>Email</b></label>
                <input onChange={(e) => changeEmailValue(e.target.value)} type="text" placeholder="Enter Email" name="email" id="email" required/>

                <label for="name"><b>FullName</b></label>
                <input onChange={(e) => changeNameValue(e.target.value)} type="text" placeholder="Enter Full Name" name="name" id="name" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input onChange={(e) => changePasswordValue(e.target.value)} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <hr/>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                
            </div>

            <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div>
        </form>
        <button onClick={createUser}>Register</button>
        </div>
        
    )

}

export default Register;