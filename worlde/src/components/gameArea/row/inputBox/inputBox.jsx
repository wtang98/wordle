import React from 'react'

const InputBox = ({name, length, handleChange}) => {
    return (
        <div className='inputBox'>
            <input
                style={{ margin: 10 }}
                type="text"
                name={name}
                maxLength={length}
                onChange={handleChange}
            ></input>
        </div>
    )
}

export default InputBox