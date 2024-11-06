import styles from './PostForm.module.scss';
import TextInput from '../../views/TextInput/TextInput';
import TextArea from '../../views/TextArea/TextArea';
import { addPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        Published <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {/* Published <TextInput value={publishedDate} placeholder={'Enter data here'} onChange={e => setPublishedDate(e.target.value)} /> */}
        Short description <ReactQuill theme='snow' placeholder='Leave a short description here' value={shortDescription} onChange={setShortDescription} />    
        Main content <ReactQuill theme="snow" placeholder='Leave a main content here' value={content} onChange={setContent} />
        <button className={styles.buttonAdd}>{actionText}</button>
    </form>
    );

}

export default PostForm;