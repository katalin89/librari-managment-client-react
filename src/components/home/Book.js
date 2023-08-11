import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Book({book}){
    return(
        <Card style={{width: '18rem'}}>
            <Card.Body>
            
                <Card.Title>Book</Card.Title>
                <h1>2023-01-01</h1>

                <Button variant="primary">Delete</Button>
                <Button variant="primary">Update</Button>

            </Card.Body>

            
        </Card>
    );
}

export default Book;
