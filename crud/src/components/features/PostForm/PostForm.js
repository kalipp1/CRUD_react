import styles from './PostForm.module.scss';
import TextInput from '../../views/TextInput/TextInput';
import TextArea from '../../views/TextArea/TextArea';
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, actionText, ...props}) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        Title <TextInput value={title} placeholder={'Enter title here'} onChange={e => setTitle(e.target.value)} />
        Author <TextInput value={author} placeholder={'Enter author here'} onChange={e => setAuthor(e.target.value)} />
        Published <TextInput value={publishedDate} placeholder={'Enter data here'} onChange={e => setPublishedDate(e.target.value)} />
        Short description <TextArea value={shortDescription} rows={4} cols={50} placeholder={'Leave a short description here'} onChange={e => setShortDescription(e.target.value)} />
        Main content <TextArea value={content} rows={15} cols={50} placeholder={'Leave a main content here'} onChange={e => setContent(e.target.value)} />
        <button>{actionText}</button>
    </form>
    );

}

export default PostForm;