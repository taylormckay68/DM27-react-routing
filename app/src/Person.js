import React from 'react';
import {getPerson} from './peopleService.js';

export default function(props) {
    let person = getPerson(props.match.params.id);
    return (
        <div>
            <h1>
            {person.name}
            </h1>
            <h3>
            {person.description}
            </h3>
            <img src={person.image} />
        </div>
    )
}