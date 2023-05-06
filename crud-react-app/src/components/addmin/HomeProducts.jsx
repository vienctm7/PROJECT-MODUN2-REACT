import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HomeProducts() {
  const [data, setData] = useState([]);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3000/products");
    setData(result.data);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  useEffect(() => {

    loadUser();
  }, []);
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`)
    loadUser();
  }
  return (
    <div>
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home"><h2>Home Page</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/homeAdmin">
                  <h4>Addmin User</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addProduct"
                >
                  <h4>Admin Products</h4>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/orderList"
                >
                  <h4>Admin Order</h4>
                </Link>
              </li>
            </Nav>
            <div className="d-flex">
               <Link to ={"/addProduct"}>
               <Button variant="outline-info">Add Product</Button>
               </Link>
              </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2>Admin Products</h2>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr className="bg-dark text-white">
              <th>id</th>
              <th> Image </th>
              <th> Name </th>
              <th> Price </th>
              <th colSpan={3}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td> <img src={product.anh} width={80} alt="" /> </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                <Link>
                <Button variant="primary" onClick={handleShow}>
                <i class='fa-solid fa-eye'></i>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <thead>
            <tr className="bg-dark text-white">
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
            </tr>
          </thead>
                <td>{product.anh}</td>
                <td>{product.name}</td>
            
                <td>{product.gia}</td>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                    
                    </Link>
                </td>
                <td>
                  <Link to = {`/editProduct/${product.id}`}>
                  <Button variant="warning">Edit</Button>{' '}
                  </Link>
                </td>
                <td>
                <Link>
                  <Button onClick={()=>deleteUser(product.id)} variant="danger">Delete</Button>{' '}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HomeProducts;
