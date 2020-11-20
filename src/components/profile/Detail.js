import React, { useState } from 'react';
import { Card, ListGroup, Collapse, Button } from 'react-bootstrap';

export default function Detail({ isOpen, title, info }) {
    const [open, setOpen] = useState(isOpen);
    const content = [];

    if (info) {
        Object.keys(info).forEach(key => {
            content.push(
                <ListGroup.Item key={key}>
                    <div className="row">
                        <div className="col col-lg-3">
                            <p>{ key }</p>
                        </div>
                        <div className="col col-lg-1">
                        </div>
                        <div className="col">
                            <p>{ info[key] }</p>
                        </div>
                    </div>
                </ListGroup.Item>
            )
        });
    }    

    return (
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title style={ style.cardTitle }>{ title }</Card.Title>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                >
                    {open ? '-' : '+'}
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <div id="collapse-text">
                    <Card.Body>                        
                        <ListGroup variant="flush">
                            { content }
                        </ListGroup>
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    )
}

const style = {
    cardTitle: {
        margin: '0',
        fontSize: '1.5rem'
    }
};
