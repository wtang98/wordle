import React, {useContext} from 'react'
import { ContextAPI } from '../../../../App'
import './letter.scss'

const Letter = ({letterI, attemptI}) => {

    const {board} = useContext(ContextAPI)

    const letter = board[attemptI][letterI]

    return (
        <div className='letter'>   
            {/* {letter} */}
            <input type="text" defaultValue={letter} maxLength={1} />
        </div>
    )
}

export default Letter