import React from 'react';
import './main.css';
const parseTeam = (teams) => {
    let ret = " "
    for (let i=0; i < teams.length; i+=1) {
        if (i==teams.length-1) {
            ret += teams[i]
        } else {
            ret += teams[i] + ", ";
        }
    }

    return ret
}

const Person = (person) => {
    person = person.person;
    return (
        <div className="list">
            <span className="name">{person.name}</span>
            <span className="description">
                Hi! my name is 
                <span>{" " + person.name}</span>, 
                and I am a part of the teams 
                <span>{parseTeam(person.teams)}</span>! 
                I am also
                <span style={{fontStyle: "italic"}}>{" " + person.is}</span>
            </span>
        </div>
    );
}

export default Person;