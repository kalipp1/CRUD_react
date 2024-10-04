import styles from './DeleteButton.module.scss';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';

function DeleteButton ({ onDelete }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleConfirm = () => {
        handleClose();
        onDelete();
    }
    return (
        <>
          <button className={styles.buttonRed} variant="primary" onClick={handleShow}>
            Delete
          </button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Are you sure ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This operation will completely remove this post from the app!
                Are you sure you want to do that?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <button className={styles.buttonRedModal} variant="primary" onClick={handleConfirm}>
                Remove
              </button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

  export default DeleteButton