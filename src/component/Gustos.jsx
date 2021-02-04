import React, {useEffect, useState} from 'react';
import theBeatles from '../imgs/The_Fabs.jpeg';
import queen from '../imgs/queen.jpg';
import led from '../imgs/led-zeppelin.jpg';
import doors from '../imgs/doors.jpeg';
import guns from '../imgs/guns.jpg';
import jimmy from '../imgs/jimmy.jpg';
import bonjovi from '../imgs/bon_jovi.jpeg';
import guitar from '../imgs/guitarra.jpg';
import pro from '../imgs/pro.jpeg';
import com from '../imgs/com.jpeg';
import game from '../imgs/game.jpg';
import rubik from '../imgs/rubik.jpeg';

const Gustos = () => {
    let [music, setM] = useState({display: "none"});
    let [develop, setD] = useState({display: "none"});
    let [band, setB] = useState({display: "none"});
    let [hobbie, setH] = useState({display: "none"});
    useEffect(() => {
        document.title = 'gustos personales'
    }, [])
    return (
        <main>
            <h1>My likes</h1>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (music.display === "none") {
                    setM({display: "block"})
                } else {
                    setM({display: "none"})
                }
            }}>musical tastes</h2>
            <p style={music}>I like the Rock</p>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (band.display === "none") {
                    setB({display: "block"})
                } else {
                    setB({display: "none"})
                }
            }}>Some of my favorite rock bands:</h2>
            <ul style={band}>
                <li>
                    <p>The Beatles</p>
                    <img src={theBeatles} alt='the beatles' />
                </li>
                <li>
                    <p>Led Zeppelin</p>
                    <img src={led} alt='led zeppelin' />
                </li>
                <li>
                    <p>Queen</p>
                    <img src={queen} alt='queen' />
                </li>
                <li>
                    <p>Guns n' Roses</p>
                    <img src={guns} alt='guns n roses' />
                </li>
                <li>
                    <p>Bon Jovi</p>
                    <img src={bonjovi} alt='bon jovi' />
                </li>
                <li>
                    <p>The Doors</p>
                    <img src={doors} alt='the doors' />
                </li>
                <li>
                    <p>The Jimmy Hendryx Experience</p>
                    <img src={jimmy} alt='the jimmy hendrix experience' />
                </li>
            </ul>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (hobbie.display === "none") {
                    setH({display: "block"})
                } else {
                    setH({display: "none"})
                }
            }}>my hobbies:</h2>
            <ul style={hobbie}>
                <li>
                    <p>develop web pages</p>
                    <img src={pro} alt='development' />
                </li>
                <li>
                    <p>play the guitar</p>
                    <img src={guitar} alt='guitar' />
                </li>
                <li>
                    <p>Play video games</p>
                    <img src={game} alt='game' />
                </li>
                <li>
                    <p>Make the Rubik's cube</p>
                    <img src={rubik} alt='game' />
                </li>
            </ul>
            <h2 style={{cursor: "pointer"}} onClick={() => {
                if (develop.display === "none") {
                    setD({display: "block"})
                } else {
                    setD({display: "none"})
                }
            }}>What will i do when i grow up?</h2>
            <p style={develop}>I want to be a computer engineer</p>
            <img style={develop} src={com} alt='computer engineer' />
        </main>
    );
}

export default Gustos;