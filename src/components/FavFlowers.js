import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import RenderFlower from "./RenderFlower";

import UpdateForm from "./UpdateForm";
class FavFlowers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrOfData: [],
      show: false,
      index: -1,
      instructions: "",
      name: "",
      photo: "",
    };
  }

  componentDidMount = () => {
    const ownerEmail = this.props.auth0.user.email;

    axios
      .get(
        `${process.env.REACT_APP_URL}/getFromDataBase?ownerEmail=${ownerEmail}`
      )
      .then((results) => {
        this.setState({
          arrOfData: results.data,
        });
      });
  };

  deleteFlowers = (idx) => {
    const deleteObj = {
      ownerEmail: this.props.auth0.user.email,
    };

    axios
      .delete(`${process.env.REACT_APP_URL}/deleteData/${idx}`, {
        params: deleteObj,
      })
      .then((results) => {
        this.setState({ arrOfData: results.data });
      });
  };

  showModal = (idx) => {
    this.setState({
      name: this.state.arrOfData[idx].name,
      photo: this.state.arrOfData[idx].photo,
      instructions: this.state.arrOfData[idx].instructions,

      show: true,
      index: idx,
    });
  };

  updateValues = (e) => {
    e.preventDefault();

    const updateObj = {
      ownerEmail: this.props.auth0.user.email,
      name: e.target.name.value,
      photo: e.target.photo.value,
      instructions: e.target.instructions.value,
    };

    axios
      .update(
        `${process.env.REACT_APP_URL}/updateData/${this.state.index}`,
        updateObj
      )
      .then((results) => {
        this.setState({
          arrOfData: results.data,
        });
      });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <UpdateForm
          handleClose={this.handleClose}
          show={this.state.show}
          updateValues={this.updateValues}
          name={this.state.name}
          photo={this.state.photo}
          instructions={this.state.instructions}
        />

        <RenderFlower
          idx={idx}
          deleteFlowers={this.deleteFlowers}
          showModal={this.showModal}
          arrOfData={this.state.arrOfData}
          item={item}
        />
      </>
    );
  }
}

export default FavFlowers;
