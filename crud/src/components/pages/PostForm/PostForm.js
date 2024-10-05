import styles from './PostForm.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostForm = () => {
    return (
      <div className={styles.addPostPage}>
        <h1>Add Post</h1>
        <AddPostForm />
      </div>
    );
  };

  export default PostForm;