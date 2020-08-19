import React from 'react';

const Cardimage = ({ imageSrc }) => {
    
    return (
        <div className="cardimage">
            <img src={imageSrc} alt="카드이미지" />  
            {/* <cardimagestyle src={require('./logo.jpg')} alt="카드이미지" /> */}
        </div>
    )
}

export default Cardimage;
