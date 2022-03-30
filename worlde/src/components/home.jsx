import React,{useState, useEffect} from 'react'
import GameArea from './gameArea/gameArea';
import './home.scss'
import Keyboard from './keyboard/keyboard';


const schedule = require('node-schedule');

const Home = () => {
    
    return (
        <div className='home'>
            <h1>Fake Wordle</h1>
            <GameArea/>
            <Keyboard/>
        </div>
    )
}

export default Home