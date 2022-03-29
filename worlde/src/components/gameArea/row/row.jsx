import React from 'react'
import InputBox from './inputBox/inputBox';


const Row = () => {
    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        let fieldIntIndex = parseInt(fieldIndex, 10);
            // Check if no of char in field == maxlength
            if (value.length >= maxLength) {
            // It should not be last input field
                if (fieldIntIndex < 3) {
                    // Get the next input field using it's name
                    const nextfield = document.querySelector(
                    `input[name=field-${fieldIntIndex + 1}]`
                    );
                    // If found, focus the next field
                    if (nextfield !== null) {
                    nextfield.focus();
                    }
                }
            }
    }
    return (
        <div className='row'>
            <InputBox  name="field-1" length="1" 
                handleChange={handleChange}/>
            <InputBox  name="field-2" length="1" 
                handleChange={handleChange}/>
            <InputBox  name="field-3" length="1" 
                handleChange={handleChange}/>
            <InputBox  name="field-4" length="1" 
                handleChange={handleChange}/>
            <InputBox  name="field-5" length="1" 
                handleChange={handleChange}/>
            <InputBox  name="field-6" length="1" 
                handleChange={handleChange}/>
        </div>
    )
}

export default Row