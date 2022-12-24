import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMessage({ title, body, setShow, handleDelete, show }) {
    const handleClose = () => setShow(false);

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{body}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleDelete}>OK</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalMessage;
