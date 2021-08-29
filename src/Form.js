import React from 'react'
import './index.css'

const Form = () => {
    const validation = ()=>{
        console.log('clicked ')
        var email = document.getElementById('email')
        var emailV = document.getElementById('emailV')
        if(email === ''){
        emailV.innerHTML = "enter email"
        }


    }
    return (
        <>
         <div className="container form-container">
         <div className="text-center fs-1 fw-bold">SIGN IN</div>
           <form  onSubmit = {validation} >
          
          <div className="form-group">
           <label HTMLFOR ="email"> EMAIL ADDRESS :</label>
           <input type="text" id="email" className="form-control my-1"/>
           <span id = "emailV">We'll never share your email with anyone else</span>
          </div>
         <div className="form-group">
          <label HTMLFOR ="pwd" className="my-2"> PASSWORD:</label>
           <input type="password" id="pwd" className="form-control my-1"/>
         </div>

        <a href className="btn btn-primary my-4">SUBMIT</a>
   </form>
           
           </div>
        
        </>
    )
}

export default Form
