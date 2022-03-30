import React,{useState, useContext} from 'react'
import './key.scss'
import {ContextAPI} from '../../../App'

const Key = ({value}) => {
    const {randomFiveLetter, fiveLetterWords, board, setBoard, colorBoard, setColorBoard, currentAttempt, setCurrentAttempt, grey, setGrey, yellow, setYellow, green, setGreen} = useContext(ContextAPI)
    
    let guess;
    let randomWordArr;
    if(randomFiveLetter !== undefined){
        let upper = randomFiveLetter.toUpperCase()
        randomWordArr = upper.split('')
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
                guess= ''
                setCurrentAttempt({attempt: currentAttempt.attempt+1, letterPos:0})
            }
        }else if (value === 'Delete'){
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
    const colorTheBoard = () => {
        const newColorBoard = [...colorBoard]
        console.log('clicked')
        for(let i=0; i<5;i++){
            if(randomWordArr[i] === guess[i]){
                console.log('same')
                newColorBoard[currentAttempt.attempt][i] = 'green'
                
            }
            for(let j=0; j<5;j++){
                if(randomWordArr[i] !== guess[j]){
                    console.log('dif')
                    newColorBoard[currentAttempt.attempt][i] = 'grey'
                }
            }
            if(randomWordArr[i] !== guess[i]){
                for(let x=0; x<5;x++){
                    if(randomWordArr[i] !== guess[x]){
                        console.log('same but diff')
                        newColorBoard[currentAttempt.attempt][i] = 'yellow'
                    }
                }
            }
        }
        console.log(newColorBoard)
        setColorBoard(newColorBoard) 
    }

    return (
        <div className={`key ${grey && 'grey'} ${yellow && 'yellow'} ${green && 'green'}`} onClick={clickLetter}>
            {value}
        </div>
    )
}

export default Key