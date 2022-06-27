import { useRouter } from "next/router";
import styles from "../../styles/blog-post.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.blogHeading}>Title of the page {slug}</h1>
        <div className={styles.blogContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem,
          porro eum architecto, voluptatum veritatis reiciendis omnis dolores
          sequi, soluta a laboriosam esse. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat eum omnis. Alias esse ducimus doloremque autem fugiat, minima unde doloribus maiores quo nulla ipsam maxime, explicabo similique ipsa aliquam delectus temporibus rem tenetur sequi reprehenderit debitis totam. Atque explicabo neque sint eum quod ad repudiandae molestiae dolor perspiciatis ratione! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eveniet tempore et esse architecto perferendis minus nesciunt porro itaque expedita impedit exercitationem dolore magnam totam, pariatur ipsum reprehenderit, optio libero eaque eum repudiandae praesentium! Repudiandae dolorem, doloremque praesentium aliquam illum, omnis voluptatem esse reprehenderit eveniet harum asperiores soluta at, blanditiis perferendis porro. Maiores doloribus in sit accusantium officiis voluptas voluptatibus fugit repellendus error cumque quisquam blanditiis, optio, soluta vitae perspiciatis consectetur ex. Dolorem dignissimos hic itaque animi odit. Officiis asperiores molestiae sunt eaque laudantium suscipit, repudiandae voluptate incidunt est distinctio ipsum nisi rem. Illum fugit ad repudiandae voluptatum temporibus sapiente?
        </div>
      </main>
    </div>
  );
};

export default Slug;
