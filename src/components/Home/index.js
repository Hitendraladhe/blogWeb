import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './index.css';
import Navbar from '../Navbar';
import Blog from '../Blog';
//import Footer from '../Footer';

class Home extends Component{
  constructor(){
    super();
    this.state={
      blogs: [],
      data: [],
      send: false,
    }
  }
  
  componentDidMount=async ()=>{
    this.getAll()
  }
  

  getAll=()=>{
    fetch("https://blogbackend-2.onrender.com/AllBlogs")
      .then(res => res.json())
      .then((rows) => {
        this.setState({ blogs: rows })
        console.log(rows)
      })
  }

  

  onClickBlog=()=>{
    const {send}=this.state
    this.setState((prevState)=>({send: !prevState.send}))
  }

  render(){
    const {blogs, data,send} = this.state
    
    return (
      <div className='container' >
        <Navbar/>
        <h2>Daily Blogs</h2>
        <div className="con">
          {blogs.map(each=>(
            <Link to={`/blog/${each._id}`} style={{color: "Black", textDecoration: "none"}} onClick={this.onClickBlog}>
             <div className='blogCon'>
              <img src={each.blog.img} className='img' alt='img'/>
              <p>Title: {each.blog.title}</p>
              <p>{each.blog.des}</p>
              <div>
              <p>Blog Created By: {each.username}</p>
              </div>
            </div>
            </Link>
          ))}
          
        </div>
        <button className='addBtn' ><Link to='/addblog' style={{color: "White", textDecoration: "none"}}>Add Post</Link></button>
      </div>
  );
 }
}
export default Home;
