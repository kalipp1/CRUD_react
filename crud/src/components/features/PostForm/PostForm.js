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
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props}) => {
    const { register, handleSubmit: validate, formState: { errors } }
    = useForm();
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = () => {
        // e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (

        // <Form.Group className="mb-3" controlId="formBasicEmail">
        //     <Form.Label>Title</Form.Label>
        //     <Form.Control
        //         {...register("title", { required: true })}
        //         value={title}
        //         onChange={e => setTitle(e.target.value)}
        //         type="text" placeholder="Enter title"
        //     />
        //     {errors.title && <span>This field is required</span>}
        // </Form.Group>
    <form className={styles.form} onSubmit={validate(handleSubmit)}>
        Title <TextInput {...register("title", { required: true, minLength: 3 })} value={title} placeholder={'Enter title here'} onChange={e => setTitle(e.target.value)} />{errors.title && <small className="d-block form-text text-danger mt-0 mb-2">Title is too short (min is 3)</small>}
        Author <TextInput {...register("author", { required: true, minLength: 4 })} value={author} placeholder={'Enter author here'} onChange={e => setAuthor(e.target.value)} />{errors.title && <small className="d-block form-text text-danger mt-0 mb-2">Author is too short (min is 4)</small>}
        Published <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {/* Published <TextInput value={publishedDate} placeholder={'Enter data here'} onChange={e => setPublishedDate(e.target.value)} /> */}
        Short description <ReactQuill theme='snow' placeholder='Leave a short description here' value={shortDescription} onChange={setShortDescription} />    
        Main content <ReactQuill theme="snow" placeholder='Leave a main content here' value={content} onChange={setContent} />
        <button className={styles.buttonAdd}>{actionText}</button>
    </form>
    );

}

export default PostForm;