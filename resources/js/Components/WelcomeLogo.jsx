import React from 'react';
import logosImage from './kalasgrande.png';
export default function WelcomeLogo(props) {
    const logosStyle = {
        width: '190px',
        height: '70px',
    };
    return (
        <img {...props} src={logosImage} alt="Logo de la aplicación" style={logosStyle} />
    );
}
