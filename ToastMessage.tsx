import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
type Props={
  message: string
}
function ToastMessage({message}:Props) {
  const [show,setShow] = useState(true);
  return (
    <ToastContainer position='top-end'>
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <strong className="me-auto"><FontAwesomeIcon icon={faCheck} /></strong>
        <small>just a moment ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
    </ToastContainer>
  );
}

export default ToastMessage;