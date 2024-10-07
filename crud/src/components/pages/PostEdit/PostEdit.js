import styles from './PostEdit.module.scss';
import EditPostForm from '../../features/EditPostForm/EditPostForm';

const PostEdit = () => {
    return (
      <div className={styles.editPostPage}>
        <h1>PostEdit</h1>
        <EditPostForm />
      </div>
    );
  };

  export default PostEdit;