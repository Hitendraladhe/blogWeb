import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams, Link } from 'react-router-dom';
//import Footer from '../Footer'; 

const Blog = () => {
    const [data, setData] = useState({});
    const [blogData, setBlogData] = useState({});
    const { id } = useParams();

   

    const onDeleteClick = async(id) => {
      await fetch(`https://blogbackend-2.onrender.com/AllBlogs/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if required
        }})
      console.log(id);
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`https://blogbackend-2.onrender.com/AllBlogs/${id}/`);
            if (!response.ok) {
                throw new Error('Failed to fetch blog data');
            }
            const newData = await response.json();
            setData(newData);
            setBlogData(newData.blog);
        } catch (error) {
            console.error('Error fetching blog data:', error);
            // Handle error state here if needed
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div className='containerBlog'>
            <img src={blogData.img} className='blog-img' alt='blog-img' />
            <h3>Blog Title: {blogData.title}</h3>
            <div className='btnConBlog'>
                <button ><Link to={`/blog/editBlog/${id}/`} style={{color: "Black", textDecoration: "none"}}>Edit</Link></button>
                <button onClick={(()=>onDeleteClick(id))}><Link to='/'>Delete</Link></button>
            </div>
            <p>{blogData.des}</p>
            <h5>Blog By: {data.username}</h5>
           
        </div>
    );
};

export default Blog;
