import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const posts = useSelector(getAllPosts); 

    return (
        <div>
            <section className={styles.allPosts}>
                <h1>All posts</h1>
                <Nav>
                    <NavLink as={NavLink} to={"/post/add"}><button className={styles.button}>Add post</button></NavLink>
                </Nav>
            </section>
            <section className={styles.posts}>
                {posts.map(post => 
                    <article className={styles.post}>
                        <h4>{post.title}</h4>
                        <div className={styles.info}>
                        <span className={styles.infoItem}><b>Author: </b><p>{post.author}</p></span>
                        <span className={styles.infoItem}><b>Published: </b><p>{post.publishedDate}</p></span>
                        </div>
                        <p>{post.shortDescription}</p>
                        <Nav>
                            <Nav.Link as={NavLink} to={"/post/"+post.id}><button className={styles.button}>Read more</button></Nav.Link>
                        </Nav>
                    </article>
                )}
            </section>
        </div>
    );
  };

  export default Home;