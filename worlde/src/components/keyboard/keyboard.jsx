import React, { useContext, useState } from 'react'
import Key from './key/key'
import './keyboard.scss'
import BackSpace from '../../assets/backspace.png'
import { ContextAPI } from '../../App'

const Keyboard = () => {
    const {board, colorBoard} = useContext(ContextAPI)
    const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const third = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    const firstColor = ['', '', '', '', '', '', '', '', '', ''];
    const [secondColor, setSecondColor] = useState(['', '', '', '', '', '', '', '', '']);
    const [thirdColor, setThirdColor] = useState(['', '', '', '', '', '', '']);

    const colorKeysArrays = () => {
        for(let i=0; i<5;i++){
            for(let j=0; j<4;j++){
                if(board[i][j] != ''){
                    firstColor[first.indexOf(board[i][j])] = colorBoard[i][j]
                }
            }
        }
    }
    colorKeysArrays()
    console.log(firstColor)
    return (
        <div className='keyboard'>
            <div className="keyboard__first">
                {first.map((fir, i)=> {
                    return <Key value={fir} line={1} firstColorIndex={i} firstColor={firstColor}/>
                })}
            </div>
            <div className="keyboard__second">
                {second.map((sec, i)=> {
                    return <Key value={sec} line={2} secondColorIndex={i}/>
                })}
            </div>
            <div className="keyboard__third">
                <Key value={'Enter'}/>
                {third.map((thi, i)=> {
                    return <Key value={thi} line={3} thirdColorIndex={i}/>
                })}
                <Key value={''} BackSpace={BackSpace}/>
            </div>
        </div>
    )
}

export default Keyboard