import React from "react";
class RenderFlower extends React.PureComponent {
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
                <Button onClick={() => this.deleteFlowers(idx)}>Delete</Button>
                <Button onClick={() => this.showModal(idx)}>Update </Button>
              </Card.Body>
            </Card>
          );
        })}
      </>
    );
  }
}
export default RenderFlower;
