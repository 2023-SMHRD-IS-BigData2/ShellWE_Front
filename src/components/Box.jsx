import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Box = ({item}) => {
    console.log('넘어오는 데이터', item)
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.imgSrc} height="350px" />
                <Card.Body>
                    <Card.Title>
                        {item.title}  {item.birthYear}년생
                    </Card.Title>
                    <Card.Text>
                        {item.content}
                    </Card.Text>
                    <a href={item.SNS} target="_blank">
                        <Button variant="primary">Instagram</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Box