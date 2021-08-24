import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrOfData: [],
      instructions: "",
      name: "",
      photo: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/getData`)
      .then((results) => {
        this.setState({
          arrOfData: results.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  addingFlowers = (idx) => {
    const postObj = {
      ownerEmail: this.props.auth0.user.email,
      name: this.state.arrOfData[idx].name,
      photo: this.state.arrOfData[idx].photo,
      instructions: this.state.arrOfData[idx].instructions,
    };

    axios.post(`${process.env.REACT_APP_URL}/postData`, postObj);
  };

  render() {
    return (
      <>
        {this.state.arrOfData.map((item, idx) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.instructions}</Card.Text>
                <Button onClick={() => this.addingFlowers(idx)}>Add to favourites</Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}

export default Home;
