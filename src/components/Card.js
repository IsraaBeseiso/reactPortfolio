import React from 'react';
import Card  from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'

function cardItem(props) {
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="props.src" />
  <Card.Body>
    <Card.Title>{props.text}</Card.Title>
   
    <Button onClick={()=> window.open(props.path)}variant="primary">Visit Site!</Button>
  </Card.Body>
</Card>
  );

}

export default cardItem;