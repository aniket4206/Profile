import React, { useState, useEffect } from 'react';
import { Button, Form, Modal,Stack } from 'react-bootstrap';

function ProfileForm({ profile, onSave, onClose }) {
  const [formData, setFormData] = useState(profile);
  const [showModal, setShowModal] = useState(true); 

  useEffect(() => {
    if (!profile) { 
      setShowModal(true);
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose(); 
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static"> 
        <Modal.Header closeButton>
          <Modal.Title>{profile ? 'Edit Profile' : 'Add Profile'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address:</Form.Label>
              <Form.Control type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>

            <Stack direction="horizontal" gap={2} justifyContent="end">
        <Button type="submit" variant="success" >{profile ? 'Save Changes' : 'Add Profile'}</Button>
        <Button type="button" variant="danger" onClick={onClose}>Cancel</Button>
        </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileForm;
