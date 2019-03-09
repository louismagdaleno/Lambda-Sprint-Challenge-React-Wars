import React from 'react';
import './StarWars.css';

// create component that renders an individual character's properties
const Character = (props) => {
    return (
        <div className="character">
            <h2>{props.character.name}</h2>
        </div>
    );
}

export default Character;