import './App.scss';
import {useState, useEffect, createContext} from 'react'
import Home from './components/home';
import { startingBoard } from './jses/startingColorBoard'
import { startingColorBoard } from './jses/colorBoard';

export const ContextAPI = createContext();

function App() {

    const [board, setBoard] = useState(startingBoard);
    const [colorBoard, setColorBoard] = useState(startingColorBoard)
    const [currentAttempt, setCurrentAttempt] = useState({attempt:0, letterPos:0})
    const [allWords, setAllWords] = useState('')
    const [fiveLetterWords, setfiveLetterWords] = useState('')
    const [randomFiveLetter, setRandomFiveLetter] = useState('')

    const [grey, setGrey] = useState(false)
    const [yellow, setYellow] = useState(false)
    const [green, setGreen] = useState(false)

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

    let ansArr = [];
    if(randomFiveLetter!= undefined){
        ansArr = randomFiveLetter.split('')
    }
    console.log(randomFiveLetter)

    return (
        <div className="App">
            <ContextAPI.Provider value={{randomFiveLetter, fiveLetterWords, board, setBoard, colorBoard, setColorBoard, currentAttempt, setCurrentAttempt, grey, setGrey, yellow, setYellow, green, setGreen}}>
                <Home/>
            </ContextAPI.Provider>
        </div>
    );
}

export default App;
