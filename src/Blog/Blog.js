import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import styles from './Blog.module.css';


// const url = "http://localhost:4000/blogs";
const url = "https://blog-backend-1.herokuapp.com/blogs";


export default function Blog() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
         }).then((data) => {
             setBlog(data.data)
         }).catch(error => {
             console.log(error);
         })
    },[])

    const posts = blog.map((post) => {
      return (
        <Link to={"/post/" + post.blogId} key={post.blogId}>
          <div className={styles.card}>
           <div className={styles.blogcard}>
        <img src={post.blogImage} className={styles.blogthumbnail}/>
      <div className={styles.blogdetails}>
          <h1>{post.blogTitle}</h1>
          <br></br>
          {post.author}
      </div>
    </div>
    </div>

        </Link>
      );
    });
  
    return (<div><h1>Welcome to Titans Blog</h1><div className="blog">{posts}</div></div>);
  }
  