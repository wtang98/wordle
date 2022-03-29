import React from 'react'
import './row.scss'
import Letter from './letter/letter'

const Row = ({attemptI}) => {
    return (
        <div className='row'>
            <Letter letterI={0} attemptI={attemptI}/>
            <Letter letterI={1} attemptI={attemptI}/>
            <Letter letterI={2} attemptI={attemptI}/>
            <Letter letterI={3} attemptI={attemptI}/>
            <Letter letterI={4} attemptI={attemptI}/> 
        </div>
    )
}

export default Row