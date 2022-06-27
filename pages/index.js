import Head from "next/head";
// import Script from "next/script";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A Blog Website for Hunting Coder's by hunting coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Script src="/sc.js" strategy="lazyOnload" /> */}

      <main className={styles.main}>
        <Image
          src="/favicon.ico"
          alt="Coder Logo"
          width={150}
          height={150}
          loading="lazy"
        />
        <h1 className={styles.title}>
          Welcome to <span className={styles.span}>Hunting Coder's</span> Blog
        </h1>

        <p className={styles.description}>
          This is a blog website for Hunting Coder's by hunting coder.
        </p>

        <h2>Popular Blogs</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>How to learn JavaScript in 2022</h3>
            <p>
              JavaScript is the world's most popular programming language and
              also knowns as the language of the web.
            </p>
          </div>
          <div className={styles.card}>
            <h3>How to learn JavaScript in 2022</h3>
            <p>
              JavaScript is the world's most popular programming language and
              also knowns as the language of the web.
            </p>
          </div>
          <div className={styles.card}>
            <h3>How to learn JavaScript in 2022</h3>
            <p>
              JavaScript is the world's most popular programming language and
              also knowns as the language of the web.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
