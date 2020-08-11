import React from 'react'

const Cardinfo = ({ cardobj }) => {
    const { label, title, desc, stat } = cardobj;

    return (
        <div className="cardinfo">
            <h4>{label}</h4>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>{stat ? stat : ''}</span>
        </div>
    )
}



export default Cardinfo;
