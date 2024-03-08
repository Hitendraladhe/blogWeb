import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import './index.css'

const EditBlog =()=>{
  const [blog, setBlog] = useState()
  const users = {
    title: "",
    des: "",
    img: ""
  }

  const {id} = useParams()

  const onChangeHandle=(event)=>{
    const {name, value} = event.target
    setBlog({...blog, [name]: value})
    console.log(blog);
    
  }

  const onSubmitForm=(e)=>{
    e.preventDefault()
    fetch(`https://blogbackend-2.onrender.com/AllBlogs/${id}`, {method: "POST", body: JSON.stringify(blog), headers:{'Content-Type': 'application/json'}});
    console.log(blog);
  }

    return(
      <>
       <div className='formContainer'>
         <form onSubmit={onSubmitForm}>
            <button className='back'><Link to={`/blog/:${id}s`} style={{color: "White", textDecoration: "none"}}>Back</Link></button>
          <h4>Edit Blog</h4>
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

export default EditBlog