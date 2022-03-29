import React from 'react'
import Key from './key/key'
import './keyboard.scss'

const Keyboard = () => {
    const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const third = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    return (
        <div className='keyboard'>
            <div className="keyboard__first">
                {first.map((fir)=> {
                    return <Key keyValue={fir}/>
                })}
            </div>
            <div className="keyboard__second">
                {second.map((sec)=> {
                    return <Key keyValue={sec}/>
                })}
            </div>
            <div className="keyboard__third">
                {third.map((thi)=> {
                    return <Key keyValue={thi}/>
                })}
            </div>
        </div>
    )
}

export default Keyboard