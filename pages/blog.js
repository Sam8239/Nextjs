import styles from "../styles/blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <Link href={"/blog-posts/learn-javascript"}>
            <h3>How to learn JavaScript in 2022</h3>
          </Link>
          <p>
            JavaScript is the world's most popular programming language and also
            knowns as the language of the web.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog;
