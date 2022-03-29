import React,{useState} from 'react'
import Row from './row/row';


const GameArea = ({randomFiveLetter}) => {

    console.log(randomFiveLetter)
    return (
        <div className='gameArea'>
            <Row attemptI={0}/>
            <Row attemptI={1}/>
            <Row attemptI={2}/>
            <Row attemptI={3}/>
            <Row attemptI={4}/>
            <Row attemptI={5}/>
        </div>
    )
}

export default GameArea