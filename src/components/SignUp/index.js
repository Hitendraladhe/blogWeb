import React,{useState} from 'react'
import './index.css'
import {Link } from "react-router-dom";

const SignUp =()=>{
  
  const [user, setUser] = useState()
  const users = {
    username: "",
    email: "",
    passwod: ""
  }

  const onChangeHandle=(event)=>{
    const {name, value} = event.target
    setUser({...user, [name]: value})
    
    
  }

  const onSubmitForm=async (e)=>{
    e.preventDefault()
    const res = await fetch("http://localhost:8000/SignUp", {method: "POST", body: JSON.stringify(user), headers:{'Content-Type': 'application/json'}});
    
  }

    return(
      <>
       <div className='formContainer'>
         <form onSubmit={onSubmitForm}>
          <h4>Sign Up</h4>
            <label htmlFor='name'>Name</label>
            <input onChange={onChangeHandle} id='name' name="username" />
            <label htmlFor='email'>Email</label>
            <input onChange={onChangeHandle} id='email' name="email" />
            <label htmlFor='password'>Password</label>
            <input onChange={onChangeHandle} id='password' name="password" />
            <button type='submit'>Submit</button>
            <h6><Link to='/login' className='Link'>Log In for regular User</Link></h6>
         </form>
       </div>   
      </>
    )
}

export default SignUp