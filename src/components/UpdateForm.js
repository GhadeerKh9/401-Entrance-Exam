import React from "react";

import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class UpdateForm extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updateValues(e)}>
              <label>name</label>
              <input type="text" name="name" defaultValue={this.props.name} />

              <label>photo</label>
              <input type="text" name="photo" defaultValue={this.props.photo} />

              <label>instructions</label>
              <input
                type="text"
                name="instructions"
                defaultValue={this.props.instructions}
              />

              <input type="submit" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        ;
      </>
    );
  }
}

export default UpdateForm;
