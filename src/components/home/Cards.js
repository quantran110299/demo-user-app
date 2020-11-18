import React from 'react';
import { Card, Button } from 'react-bootstrap';
import avatar from '../../images/dummy_avatar.png';

export default function Cards({ user }) {
    return (
        <Card className="text-center" style={{ width: '18rem'}}>            
            <Card.Img variant="top" src={ avatar }/>          
            <Card.Body>
                <Card.Title>
                    {user.name}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    @{user.username}
                </Card.Subtitle>

                <Card.Text>
                    {user.phone}
                </Card.Text>
                
                <a href={"/" + user.id}>
                    <Button style={{ width: '100%' }} variant="primary">
                        View User Profile
                    </Button>
                </a>
            </Card.Body>
        </Card>
    )
}