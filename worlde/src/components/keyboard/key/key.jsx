import React,{useState, useContext} from 'react'
import './key.scss'
import {ContextAPI} from '../../../App'

const Key = ({value, BackSpace, line, firstColorIndex, firstColor, setFirstColor}) => {
    const {randomFiveLetter, fiveLetterWords, board, setBoard, colorBoard, setColorBoard, currentAttempt, setCurrentAttempt, grey, setGrey, yellow, setYellow, green, setGreen} = useContext(ContextAPI)
    
    let guess;
    let randomWordArr;
    let guessCopy
    let randomWordArrCopy
    if(randomFiveLetter !== undefined){
        let upper = randomFiveLetter.toUpperCase()
        randomWordArr = upper.split('')
        guessCopy = [...randomWordArr]
        if(guess != undefined){
            randomWordArrCopy = [...guess]
        }
    }
    const clickLetter = () => {
        if(value === 'Enter'){
            if(currentAttempt.letterPos !== 5)return 
            joinArr()
            if(!fiveLetterWords.includes(guess.join('').toLowerCase())){
                return
            }else{
                console.log(guess, 'the guess')
                console.log(randomFiveLetter.toUpperCase().split(''),'the answer split')
                colorTheBoard()
                checkWin()
                guess= ''
                setCurrentAttempt({attempt: currentAttempt.attempt+1, letterPos:0})
            }
        }else if (value === ''){
            if(currentAttempt.letterPos === 0) return
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = ''
            setBoard(newBoard)
            const newColorBoard = [...colorBoard]
            newColorBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = ''
            setColorBoard(newColorBoard) 
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos-1})
            joinArr()
        }else{
            if(currentAttempt.letterPos >4) return
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPos] = value
            setBoard(newBoard);
            setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos+1})
            joinArr()
        }
    }   
    const joinArr = () => {
        guess = board[currentAttempt.attempt]
    }

    const newColorBoard = [...colorBoard]
    const colorTheBoard = () => {
        console.log('clicked')
        for(let i=0; i<5;i++){
            for(let x=0; x<5;x++){
                if(randomWordArr[i] === guess[x]){
                    newColorBoard[currentAttempt.attempt][x] = 'yellow'
                }
            }
        }
        console.log(newColorBoard)
        makeGreen()
        fillRest()
        setColorBoard(newColorBoard) 
    }
    const makeGreen = () => {
        for(let i=0; i<5;i++){
            if(randomWordArr[i] === guess[i]){
                newColorBoard[currentAttempt.attempt][i] = 'green'
            }
        }
        setColorBoard(newColorBoard) 
    }
    const fillRest = () => {
        for(let i=0; i<5;i++){
            if(newColorBoard[currentAttempt.attempt][i] == ''){
                newColorBoard[currentAttempt.attempt][i] = 'grey'
            }
        }
    }

    const checkWin = () => {
        let winner = 0;
        for(let i =0; i<5;i++){
            if(randomWordArr[i] === guess[i]){
                winner=winner +1;
            }
        }
        console.log(winner)
        if(winner === 5){
            window.alert('you won')
        }else{
            winner = 0;
        }
    }

    return (
        <div className={`key ${colorBoard}`} onClick={clickLetter}>
            {value}
            {BackSpace&& <img src={BackSpace}/>}
        </div>
    )
}

export default Key