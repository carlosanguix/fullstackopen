import React from 'react'
import Part from './Part'

const Content = (parts) => {
    const partes = parts.parts
    console.log(partes[0]);
    
    return (
        <div>
            <Part part={partes[0].name} exercise={partes[0].exercises} />
            <Part part={partes[1].name} exercise={partes[1].exercises} />
            <Part part={partes[2].name} exercise={partes[2].exercises} />
        </div>
    );
}

export default Content;