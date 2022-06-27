import styles from "../styles/blog.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div className={styles.blog} key={blogItem.slug}>
              <Link href={`/blog-posts/${blogItem.slug}`}>
                <h3>{blogItem.title}</h3>
              </Link>
              <p>{blogItem.content.substr(0, 200)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
