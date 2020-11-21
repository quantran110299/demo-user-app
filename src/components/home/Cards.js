import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Cards({ user }) {
    return (
        <Card style={ style.card }>            
            <div style={ style.img } className="d-flex justify-content-center align-items-center">
                <div style={ style.img_text }>{ user.name.charAt(0) }</div>
            </div>
            <Card.Body>
                <Card.Title>
                    { user.name }
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    @{ user.username }
                </Card.Subtitle>

                <Card.Text>
                    <a href={ user.website }>{ user.website }</a>
                </Card.Text>
                
                <a href={ "/" + user.id }>
                    <Button style={ style.button } variant="primary">
                        View User Profile
                    </Button>
                </a>
            </Card.Body>
        </Card>
    )
}

const style = {
    card: {
        width: '18rem',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '2px 2px 2px grey'
    },
    img: {
        position: 'relative',
        width: '150px',
        height: '150px',
        margin: 'auto',
        borderRadius: '50%',
        backgroundColor: 'grey',
    },
    img_text: {
        width: '5rem',        
        fontSize: '5rem',
        textAlign: 'center',
        color: 'white'
    },
    button: {
        width: '100%',
    }    
};