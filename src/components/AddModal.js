import React, {useState} from 'react'
import { Modal, Button} from "react-bootstrap";


function AddModal( {add}) {
  const [show, setShow] = useState(false);
  const [newMovie,setNewMovie] = useState(
    {title: '' , description: '', postUrl: '', rate: ''}
  )

  const handleShow = () => {
    setShow(!show);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <Button className="btn-add" variant="primary" onClick={handleShow}>Add new Movie</Button>
      <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
          <Modal.Title>Add new Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <div>

            <div>
              <label className="input">Title: *</label>
              <input type="text" name="title" onChange={handleChange}/>
            </div>

            <div>
              <label className="input">URL Image: *</label>
              <input type="text" name="posterUrl" onChange={handleChange}/>
            </div>

            <div>
              <label className="input">Rating: *</label>
              <input type="text" name="rate" onChange={handleChange}/>
            </div>

            <div>
              <label className="input">Description: *</label>
              <input type="text" name="description" onChange={handleChange}/>
            </div>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button  variant="secondary" onClick={handleShow}>Close</Button>
            <Button variant="primary" onClick={()=>add(newMovie)} >Add Movie</Button>
          </Modal.Footer>
          </Modal>
        
    </div>
  )
}

export default AddModal