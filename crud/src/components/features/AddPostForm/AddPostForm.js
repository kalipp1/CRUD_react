import styles from './AddPostForm.module.scss';
import TextInput from '../../views/TextInput/TextInput';
import TextArea from '../../views/TextArea/TextArea';
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {

    const dispatch = useDispatch();
        const navigate = useNavigate();
        const [title, setTitle] = useState('');
        const [author, setAuthor] = useState('');
        const [publishedDate, setData] = useState('');
        const [shortDescription, setDescription] = useState('');
        const [content, setContent] = useState('');
        const handleSubmit = e => {
            e.preventDefault();
            dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
            setTitle('');
            setAuthor('');
            setData('');
            setDescription('');
            setContent('');
            navigate('/');
        };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        Title <TextInput value={title} placeholder={'Enter title here'} onChange={e => setTitle(e.target.value)} />
        Author <TextInput value={author} placeholder={'Enter author here'} onChange={e => setAuthor(e.target.value)} />
        Published <TextInput value={publishedDate} placeholder={'Enter data here'} onChange={e => setData(e.target.value)} />
        Short description <TextArea value={shortDescription} rows={4} cols={50} placeholder={'Leave a short description here'} onChange={e => setDescription(e.target.value)} />
        Main content <TextArea value={content} rows={15} cols={50} placeholder={'Leave a main content here'} onChange={e => setContent(e.target.value)} />
        <button>Add Post</button>
    </form>
    );

}

export default AddPostForm;