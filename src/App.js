import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import EditBlog from './components/EditBlog';
import AddBlog from './components/AddBlog';

const App=()=>{
    return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="blog/:id" element={<Blog />} />  
          <Route path="blog/editblog/:id" element={<EditBlog />} />    
          <Route path="*" element={<NotFound />} />      
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
