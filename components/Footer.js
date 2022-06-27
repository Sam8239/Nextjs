import styles from "../styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by
        <span className={styles.logo}>
          <Image src="/Avatar.svg" alt="Creator Logo" width={16} height={16} />
        </span>
        Sam
      </a>
    </footer>
  );
};

export default Footer;
