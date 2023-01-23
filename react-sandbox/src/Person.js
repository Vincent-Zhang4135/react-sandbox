import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
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
    const constraintsRef = useRef(null);
    person = person.person;
    let rate = 100;
    if (person.name == "Cosmos") {
        rate = 99999;
    }
    const [rating, setRating] = useState(rate);

    return (
        <motion.div
            ref={constraintsRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <motion.div drag 
            // dragConstraints={constraintsRef} 
            className="list">
                <motion.span
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                    }}
                    className="name"
                >
                    {person.name}
                </motion.span>
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
                            <button
                                class="button"
                                onClick={() => {
                                    setRating(rating + 1);
                                }}
                            >
                                <i class="arrow up" />
                            </button>
                            <button
                                class="button"
                                onClick={() => {
                                    setRating(rating + 100);
                                }}
                            >
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
            </motion.div>
        </motion.div>
    );
};

export default Person;
