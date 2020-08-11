import React from 'react';

const Cardimage = ({ cardobj }) => {
    const { img } = cardobj;
    return (
        <div className="cardimage">
            <img src={img} alt="카드이미지" />  
            {/* <cardimagestyle src={require('./logo.jpg')} alt="카드이미지" /> */}
        </div>
    )
}

export default Cardimage;
