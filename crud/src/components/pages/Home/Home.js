import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

const Home = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div>
            <h1>All posts</h1>
            <section className={styles.posts}>
                {posts.map(post => 
                    <article className={styles.post}>
                        <h4>{post.title}</h4>
                        <div className={styles.info}>
                        <span className={styles.infoItem}><b>Author: </b><p>{post.author}</p></span>
                        <span className={styles.infoItem}><b>Published: </b><p>{post.publishedDate}</p></span>
                        </div>
                        <p>{post.shortDescription}</p>
                        <button className={styles.button}>Read more</button>
                    </article>
                )}
            </section>
        </div>
    );
  };

  export default Home;