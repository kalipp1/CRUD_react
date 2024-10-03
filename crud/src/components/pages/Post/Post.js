import styles from './Post.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Post = () => {
    const { postId } = useParams();
    console.log(postId);
    const post = useSelector(state => getPostById(state, postId));
    return (
      <div className={styles.post}>
        <section className={styles.title}>
            <h1>{post.title}</h1>
            <div className={styles.buttons}>
                <Nav>
                    <NavLink as={NavLink} to={"/post/edit/"+post.id}><button className={styles.buttonBlue}>Edit</button></NavLink>
                    <button className={styles.buttonRed}>Delete</button>
                </Nav>
            </div>
        </section>
        <article>
            <div className={styles.info}>
                <span className={styles.infoItem}><b>Author: </b><p>{post.author}</p></span>
                <span className={styles.infoItem}><b>Published: </b><p>{post.publishedDate}</p></span>
            </div>
            <p className={styles.description}>{post.shortDescription}</p>
        </article>
      </div>
    );
  };

  export default Post;