import React,{useState, useEffect} from 'react'
import GameArea from './gameArea/gameArea';
import './home.scss'
import Keyboard from './keyboard/keyboard';


const schedule = require('node-schedule');

const Home = () => {
    const [allWords, setAllWords] = useState('')
    const [fiveLetterWords, setfiveLetterWords] = useState('')
    const [randomFiveLetter, setRandomFiveLetter] = useState('')

    useEffect(()=> {
        fetch('https://random-word-api.herokuapp.com/all')
        .then(result => result.json())
        .then(json => setAllWords(json))
        .catch(error => console.log(error))
    },[])
    useEffect(() => {
        if(allWords != ''){
            setfiveLetterWords(allWords.filter(word => word.length == 5))
        }
    },[allWords])
    useEffect(()=> {
        let random = parseInt(Math.random()*fiveLetterWords.length)
        setRandomFiveLetter(fiveLetterWords[random])
    },[fiveLetterWords])

    // console.log(randomFiveLetter)
    
    return (
        <div className='home'>
            <h1>Fake Wordle</h1>
            <GameArea randomFiveLetter={randomFiveLetter}/>
            <Keyboard/>
        </div>
    )
}

export default Home