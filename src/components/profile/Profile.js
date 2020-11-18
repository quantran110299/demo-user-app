import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Profile() {    
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(json => setUser(json))
    }, [id])

    return (
        <div>
            { JSON.stringify(user) }
        </div>
    )
}
