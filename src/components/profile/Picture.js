import React from 'react';

export default function Picture({ name }) {
    return (
        <div>
            <div style={ style.cover }></div>
            <div style={ style.avatar } className="d-flex justify-content-center align-items-center">
                <div style={ style.avatar_text }>{ name.charAt(0) }</div>
            </div>
            <h1 className="text-center" style={ style.name }>{ name }</h1>
            <br></br>
            <br></br>
        </div>
    )
}

const style = {
    cover: {
        height: '25vh',
        backgroundColor: 'lightblue'
    },
    avatar: {
        position: 'relative',
        top: '-10vh',
        width: '20vh',
        height: '20vh',
        margin: 'auto',
        borderRadius: '50%',
        backgroundColor: 'grey'
    },
    avatar_text: {
        width: '5rem',
        fontSize: '5rem',
        textAlign: 'center',
        color: 'white'
    },
    name: {
        position: 'relative',
        top: '-3rem'
    }
};
