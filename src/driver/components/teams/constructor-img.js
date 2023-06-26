import React from 'react';

const teams = {
    'Red Bull': '/images/teams/rb.png',
    'Mercedes': '/images/teams/mercedes.png',
    'Aston Martin': '/images/teams/am.png',
    'Ferrari': '/images/teams/ferrari.png',
    'Alpine F1 Team': '/images/teams/alpine.png',
    'AlphaTauri': '/images/teams/at.png',
    'Alfa Romeo': '/images/teams/ar.png',
    'Haas F1 Team': '/images/teams/haas.png',
    'McLaren': '/images/teams/mclaren.png',
    'Williams': '/images/teams/williams.png',
    default: '/images/teams/f1.png'
};

const TeamImage = ({ constructorName }) => {
    const icon = teams[constructorName] || teams.default;

    return <img src={icon} height="30px" alt={`${constructorName} Icon`} />;
};

export default TeamImage;
