import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cards from './Cards';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }, [])
    
    return (
      <Row>
          {
            users.map(user => (
              <Col key={ user.id } style={ style.col }>
                <Cards user={ user } />
              </Col>
            ))
          }
      </Row>
    )
}

const style = {
  col: {
    margin: '1rem'
  }
};
