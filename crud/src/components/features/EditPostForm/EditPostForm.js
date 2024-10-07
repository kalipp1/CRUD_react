import styles from './EditPostForm.module.scss';
import PostForm from '../PostForm/PostForm';
import { editPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = post => {
        dispatch(editPost({...post, id }));
        navigate('/');
    };
    if(!post) return <Navigate to={"/"} />
    else
    return(
        <PostForm action={handleSubmit} actionText={'Edit Post'}
        
            title= {post.title}
            author= {post.author}
            publishedDate= {post.publishedDate}
            shortDescription= {post.shortDescription}
            content= {post.content}
        
        />
    );
}

export default EditPostForm;