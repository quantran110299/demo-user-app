import React, { useState, useEffect } from 'react';
import {  } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Picture from './Picture';
import Detail from './Detail';

export default function Profile() {    
    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setUser(json))
    }, [id])

    if (user.length !== 0) {
        return (
            <div>
                <Picture name={ user.name } />

                <Detail
                    isOpen={true}
                    title='Personal information'
                    info={{
                        Name: user.name,
                        Username: user.username,
                        Email: user.email,
                        Phone: user.phone,
                        Website: user.website
                    }}
                />
                
                <br></br>

                <Detail
                    isOpen={false}
                    title='Address'
                    info={{
                        Street: user.address.street,
                        Suite: user.address.suite,
                        City: user.address.city,
                        Zipcode: user.address.zipcode
                    }}
                />

                <br></br>

                <Detail
                    isOpen={false}
                    title='Company'
                    info={{
                        Title: user.company.name,
                        Description: user.company.catchPhrase + user.company.bs,
                    }}
                />
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
