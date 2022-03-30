import React, {useContext} from 'react'
import { ContextAPI } from '../../../../App'
import './letter.scss'

const Letter = ({letterI, attemptI}) => {

    const {board, colorBoard} = useContext(ContextAPI)

    const letter = board[attemptI][letterI]
    const color = colorBoard[attemptI][letterI]

    // console.log(green, 'is correct?')
    return (
        <div className={`letter ${color}`}>   
            {letter}
            {/* <input type="text" defaultValue={letter} value = {letter} maxLength={1} /> */}
        </div>
    )
}

export default Letter