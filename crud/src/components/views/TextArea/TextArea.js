import styles from './TextArea.module.scss';

const TextArea = (props) => {
    return <textarea className={styles.input} value={props.value} rows={props.rows} cols={props.cols} onChange={props.onChange} placeholder={props.placeholder} type="text" />
};

export default TextArea;