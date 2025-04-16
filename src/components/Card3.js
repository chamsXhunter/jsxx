import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card3() {
  return (
   
  // card3
   
   
   <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='img1' variant="top" src="https://i.pinimg.com/736x/49/e5/c0/49e5c05d95f33b15c6bc0059a2eb396b.jpg" />
      <Card.Body>
        <Card.Title>madara uchiha</Card.Title>
        <Card.Text>
        Madara Uchiwa (うちはマダラ, Uchiha Madara) était un chef légendaire du clan Uchiwa. Il fonda le village caché de Konoha avec son rival
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card3
