import React,{useState, useContext} from 'react'
import './key.scss'
import {ContextAPI} from '../../../App'

const Key = ({value}) => {
    const {randomFiveLetter, fiveLetterWords, board, setBoard, currentAttempt, setCurrentAttempt, grey, setGrey, yellow, setYellow, green, setGreen} = useContext(ContextAPI)
    const [joinedArr, setJoinedArr] = useState('')
// console.log(board[currentAttempt.attempt])
    let guessArr = [];
    let guess;
    const clickLetter = () => {
        if(value === 'Enter'){
            if(currentAttempt.letterPos !== 5)return 
            joinArr()
            if(!fiveLetterWords.includes(guess.join('').toLowerCase())){
                setJoinedArr('')
                for(let i =0; i<5;i++){
                    if(guess[i] == randomFiveLetter[i]){

                    }
                }
                return
            }else{
                setCurrentAttempt({attempt: currentAttempt.attempt+1, letterPos:0})
            }
        }else if (value === 'Delete'){
            if(currentAttempt.letterPos === 0) return
            const newBoard = [...board]
            newBoard[currentAttempt.attempt][currentAttempt.letterPos-1] = ''
            setBoard(newBoard)
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
        console.log(board[currentAttempt.attempt].join('').toLowerCase(),'guess')
        guess = board[currentAttempt.attempt]
        // setJoinedArr(any)
        console.log(guess, 'cur')
        console.log(randomFiveLetter)
        console.log(randomFiveLetter[1])
        console.log(!fiveLetterWords.includes(joinedArr),'bool')
    }

    return (
        <div className='key' onClick={clickLetter}>
            {value}
        </div>
    )
}

export default Key