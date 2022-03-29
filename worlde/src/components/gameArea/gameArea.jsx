import React from 'react'
import Row from './row/row'

const GameArea = ({randomFiveLetter}) => {
    console.log(randomFiveLetter)
    return (
        <div className='gameArea'>
            <Row/>
        </div>
    )
}

export default GameArea