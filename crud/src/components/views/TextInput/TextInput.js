import styles from './TextInput.module.scss';
import React from 'react';

const TextInput = React.forwardRef((props, ref) => {
    const { value, onChange, placeholder, ...rest } = props;
    return <input ref={ref} className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type="text" {...rest} />
});

export default TextInput;