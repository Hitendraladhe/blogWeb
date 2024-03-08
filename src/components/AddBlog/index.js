import React, {useState} from 'react'
import {  Link } from 'react-router-dom'
import './index.css'

const AddBlog =()=>{
  const [blog, setBlog] = useState()
  const blogData = {
    title: "",
    des: "",
    img: ""
  }

  

  const onChangeHandle=(event)=>{
    const {name, value} = event.target
    setBlog({...blog, [name]: value})
    console.log(blog);
    
  }

  const onSubmitForm= async(e)=>{
    e.preventDefault()
    const auth = JSON.parse(localStorage.getItem("user"));
    console.log(auth.username)
    const data = await {blog:{...blog},  username: auth.username,comment: auth.comment};
    await fetch('https://blogbackend-2.onrender.com/AllBlogs/add', {method: "POST", body: JSON.stringify(data), headers:{'Content-Type': 'application/json'}});
    //console.log(data);
  }

    return(
      <>
       <div className='formContainer'>
         <form onSubmit={onSubmitForm}>
            <button className='back'><Link to='/' style={{color: "White", textDecoration: "none"}}>Back</Link></button>
            <h4>Add Blog</h4>
            <label htmlFor='title'>Title</label>
            <input onChange={onChangeHandle} id='title' name="title" />
            <label htmlFor='des'>Description</label>
            <input onChange={onChangeHandle} id='des' name="des" />
            <label htmlFor='img'>Image</label>
            <input onChange={onChangeHandle} id='img' name="img" />
            <button type='submit'>Submit</button>
         </form>
       </div>   
      </>
    )
}

export default AddBlog