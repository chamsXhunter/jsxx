import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card1() {
  return (
    // card1
    
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='img1' variant="top" src="https://i.pinimg.com/736x/3e/3d/ae/3e3dae372d94fbe28f54738b80dc1159.jpg" />
      <Card.Body>
        <Card.Title>sasuke uchiha</Card.Title>
        <Card.Text>
        C'est un ninja du village de Konoha au caractère calme et détaché, conçu pour être à la fois le partenaire et le rival du personnage principal
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card1
