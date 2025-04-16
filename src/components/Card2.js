import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card2() {
  return (
   
  //  card2
   
   <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img className='img1' variant="top" src="https://preview.redd.it/psseu93j62la1.jpg?auto=webp&s=94fb1fe76992ce32c54122e04c8be579dd0fceea" />
      <Card.Body>
        <Card.Title>naruto shippuden</Card.Title>
        <Card.Text>
        Naruto retourne au village après avoir terminé sa formation avec Jiraiya. Il y retrouve Sakura,
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card2
