import React, { useState } from "react";
import { Button } from "react-native-paper";
import "./main.css";

const parseTeam = (teams) => {
    let ret = " ";
    for (let i = 0; i < teams.length; i += 1) {
        if (i == teams.length - 1) {
            ret += teams[i];
        } else {
            ret += teams[i] + ", ";
        }
    }

    return ret;
};

const Person = (person) => {
    person = person.person;
    let rate = 100;
    if (person.name == "Cosmos") {
        rate = 99999;
    }
    const [rating, setRating] = useState(rate);

    return (
        <div className="list">
            <span className="name">{person.name}</span>
            {person.name ? (
                <>
                    <span className="description">
                        Hi! my name is
                        <span style={{ fontStyle: "italic" }}>
                            {" " + person.name}
                        </span>
                        , and I am a part of the teams
                        <span>{parseTeam(person.teams)}</span>! I am also
                        <span style={{ fontStyle: "italic" }}>
                            {" " + person.is}
                        </span>
                    </span>
                    <span className="rating">{rating}</span>
                    <span className="buttons">
                        <button class="button" onClick={()=> { setRating(rating+1);}}>
                            <i class="arrow up" />
                        </button>
                        <button class="button" onClick={()=> { setRating(rating+100);}}>
                            <i class="arrow down" />
                        </button>
                    </span>
                </>
            ) : (
                <>
                    <span className="description"></span>
                    <span className="rating">Stellar-ness Rating</span>
                    <span className="buttons"></span>
                </>
            )}
        </div>
    );
};

export default Person;
