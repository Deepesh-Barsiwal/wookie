import React from 'react'
import Form from './Form';

const Register = () => {
    
    const validation = ()=>{
        console.log('clicked ')
        var name = document.getElementById('name')
        var nameV = document.getElementById('nameV')
        var email = document.getElementById('email')
        var emailV = document.getElementById('emailV')
        var pwd = document.getElementById('pwd')
        var pwdV = document.getElementById('pwdV')
        var Cpwd = document.getElementById('Cpwd')
        var CpwdV = document.getElementById('CpwdV')
        if (name.value === '') {
            nameV.innerHTML="PLEASE FILL THE BLANK"
            return false;
        }
        if (!isNaN(name.value)) {
            nameV.innerHTML="Write your name in Alphabets"
            return false;
        }
        
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

if(Cpwd.value === ''){
    CpwdV.innerHTML="Please CONFIRM YOUR PASSWORD";
  
    return false;
}

if(pwd.value !== Cpwd.value){
    CpwdV.innerHTML="PASSWORD DOES NOT MATCH";
  
    return false;
}
    }
    return (
        <>
          <div className="container form-container">
         <div className="text-center fs-1 fw-bold">CREATE YOUR ACCOUNT HERE</div>
           <form>
           <div className="form-group">
           <label htmlFor ="name"> Your NAME</label>
           <input type="text" id="name" className="form-control my-1"/>
           <div><span id = "nameV" className="text-danger"></span></div>
        
          </div>

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

         <div className="form-group">
          <label htmlFor ="pwd" className="my-2">CONFIRM PASSWORD:</label>
           <input type="password" id="Cpwd" className="form-control my-1"/>
           <span id = "CpwdV" className="text-danger"></span>
         </div>
        <a href="#" className="btn btn-primary my-4" onClick = {validation}>SIGN UP</a>
   </form>
           
           </div>
        </>
    )
}

export default Register
