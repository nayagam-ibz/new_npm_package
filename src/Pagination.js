// // Button.js
// import React from 'react';
// import { Button, Row, Col } from 'react-bootstrap';



// // const Button = require('react-bootstrap').Button;

// function Pagination() {
//   return (
//      <Row>
//       <Col md={6}>
//         sddsfds
//         <Button variant="primary">Primary</Button>
//       </Col>
//       <Col md={6}>
//         sdfsffff
//         <Button variant="primary">Primary</Button>
//       </Col>
//     </Row>
      
//     );
// };

// export default Pagination;




import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useForm } from 'react-hook-form'
import axios from "axios";

 const baseURL = "http://127.0.0.1:5000/login"

 const url = 'https://jsonplaceholder.typicode.com/posts';
const data = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

function Pagination() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log("ddddddddddddddddddd")
    axios.post(url, data)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal_tow
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pagination;




// // App.js
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

// const Pagination = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   return (
//     <div>
//       <Button variant="primary">
//         Open Modal
//       </Button>
//     </div>
//   );
// };

// export default Pagination;
