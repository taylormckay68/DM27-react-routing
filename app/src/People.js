import React from 'react';
import {Link} from 'react-router-dom';
import { getPeople } from './peopleService.js';

export default function() {
    const people = getPeople().map((e, i) => {
        return <Link to={`/people/${e.id}`} key={i} >{e.name}</Link>
    })
    return(
        <div>
            { people }
        </div>
    )
}