import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'

const Form = () => {
    const validation = ()=>{
        console.log('clicked ')
        var email = document.getElementById('email')
        var emailV = document.getElementById('emailV')
        var pwd = document.getElementById('pwd')
        var pwdV = document.getElementById('pwdV')
        if(email.value === ''){
        emailV.innerHTML = "ENTER EMAIL PLEASE";
    return false;
        }
        if(pwd.value === ''){
            pwdV.innerHTML="Please fill password";
          
            return false;
        }
if(pwd.value.length <10){
    pwdV.innerHTML="Please fill password of 10 character";
    return false;
}

    }
    return (
        <>
         <div className="container form-container">
         <div className="text-center fs-1 fw-bold">SIGN IN</div>
           <form   >
          
          <div className="form-group">
           <label htmlFor ="email"> EMAIL ADDRESS :</label>
           <input type="text" id="email" className="form-control my-1"/>
           <div><span id = "emailV" className="text-danger"></span></div>
           <span>We'll never share your email with anyone else</span>
          </div>
         <div className="form-group">
          <label htmlFor ="pwd" className="my-2"> PASSWORD:</label>
           <input type="password" id="pwd" className="form-control my-1"/>
           <span id = "pwdV" className="text-danger"></span>
         </div>

        <NavLink to="/" className="btn btn-primary my-4" onClick = {()=>validation}>SUBMIT</NavLink>
   </form>
           
           </div>
        
        </>
    )
}

export default Form
