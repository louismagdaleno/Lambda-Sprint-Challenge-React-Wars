import React from 'react';
import './StarWars.css';

// components
import Character from './Character';

// Create component that is a container is rendered Character's
const CharacterContainer = (props) => {
    return (
        <div className="characterContainer">
            {props.characters.map((character, index) => <Character  id={index} character={character} />) }
        </div>
    );
}

export default CharacterContainer;