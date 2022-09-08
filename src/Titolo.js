import React from 'react'

export const Titolo = () => {
    return (
        <section>
            <Saluto />
            <Saluto />
            <Saluto />
        </section>
    )
};

const Persona = () => {
    return (
        <h2>Sono un Paragrafo</h2>
    )
};
const Messaggio = () => {
    return (
        <h4>Sono un Messaggio</h4>
    )
};
const Saluto = () => {
    return (
        <React.Fragment>
            <Persona />
            <Messaggio />
        </React.Fragment>
    )
};

export default Titolo;
