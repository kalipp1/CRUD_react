import styles from './Post.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import DeleteButton from '../../views/DeleteButton/DeleteButton';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';

const Post = () => {
    const { postId } = useParams();
    const post = useSelector(state => getPostById(state, postId));
    const dispatch = useDispatch();
    const handleRemove = function(){
        dispatch(removePost(post.id));
    }
    if(!post) return <Navigate to={"/"} />
    else
    return (
      <div className={styles.post}>
        <section className={styles.title}>
            <h1>{post.title}</h1>
            <div className={styles.buttons}>
                <Nav>
                    <NavLink as={NavLink} to={"/post/edit/"+post.id}><button className={styles.buttonBlue}>Edit</button></NavLink>
                    <DeleteButton onDelete={handleRemove} />
                </Nav>
            </div>
        </section>
        <article>
            <div className={styles.info}>
                <span className={styles.infoItem}><b>Author: </b><p>{post.author}</p></span>
                <span className={styles.infoItem}><b>Published: </b><p>{dateToStr(new Date(post.publishedDate))}</p></span>
            </div>
            <p className={styles.description} dangerouslySetInnerHTML={{ __html: post.shortDescription }} />
        </article>
      </div>
    );
  };

  export default Post;