import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import styles from './Post.module.css';


// const url = "http://localhost:4000/blogs";
const url = "https://blog-backend-1.herokuapp.com/blogs";




export default function Post() {
  
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
      fetch(`${url}/${blogId}`).then((response) => {
          return response.json()
       }).then((data) => {
           setBlog(data.data)
       }).catch(error => {
           console.log(error);
       })
  },[blogId])

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
      <h1 className={styles.title}>{blog.blogTitle}</h1>
      <img src={blog.blogImage} className={styles.image}></img>
      <p className={styles.mainPost}>{blog.blogContent}</p>
      </div>
      <div className={styles.aside}>
        <h3>Related Teams</h3>
        {blog.relatedLinks?
        blog.relatedLinks.map((item)=>(
          <div key={item.blogId} className={styles.asideItem}>
        <Link to={"/post/" + item.relatedBlogId} > <li>{item.relatedBlogTitles}</li></Link>
        <br></br>
        </div>
        ))
          :
       <h5>None</h5>
       }
      </div>
    </div>
  );
}
