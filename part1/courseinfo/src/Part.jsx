import React from 'react'

const Part = (props) => {
    const part = props.part
    const quantity = props.exercise

    
    return (
        <div>{part} {quantity}
        </div>
    );
}

export default Part;