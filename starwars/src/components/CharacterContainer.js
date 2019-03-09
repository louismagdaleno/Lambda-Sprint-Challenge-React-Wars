import React from 'react';
import './StarWars.css';

// components
import Character from './Character';

// Create component that is a container is rendered Character's
const CharacterContainer = (props) => {
    return (
        <div className="characterContainer">
            {props.characters.map(character => <Character character={character} />) }
        </div>
    );
}

export default CharacterContainer;