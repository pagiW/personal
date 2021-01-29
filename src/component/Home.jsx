import React, { useEffect, useState } from 'react';

const Home = () => {
    let [edad, setEdad] = useState({
        display: "none"
    })
    let [name, setName] = useState({
        display: "none"
    })
    useEffect(() => {
        document.title = 'personal description'
    }, [])
    return (
        <main>
            <h1>Personal description</h1>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (name.display === "none") {
                    setName({display: "block"})
                } else {
                    setName({display: "none"})
                }
            }}>Name</h2>
            <p style={name}>Juan Sebastian Florez Gomez</p>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (edad.display === "none") {
                    setEdad({display: "block"})
                } else {
                    setEdad({display: "none"})
                }
            }}>Age</h2>
            <p style={edad}>13 year old</p>
        </main>
    );
}

export default Home;