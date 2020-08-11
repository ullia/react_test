import React, { useState, useEffect } from 'react'
import Cardimage from './Cardimage';
import Cardinfo from './Cardinfo';
import Cardratings from './Cardratings';
import './CardStyle.scss';

const Card = () => {
    const [cardobj, setCardobj ] = useState([
        {
            img: 'http://image.adidas.co.kr/upload/design_temp/etc/2008/logo.jpg',
            label : 'Card Label 1',
            title : 'Card Title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolores dolorum tempore ad nam earum amet ipsam pariatur,',
            stat : 'card stat',
            rating : 3,
            author : 'Cielo'
        },
        {
            img: 'http://image.adidas.co.kr/upload/design_temp/etc/2008/logo.jpg',
            label : 'Card Label 2',
            title : 'Card Title123',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolores dolorum tempore ad nam earum amet ipsam pariatur,',
            stat : 'card stat',
            rating : 5,
            author : 'Cielo'
        },
        {
            img: 'http://image.adidas.co.kr/upload/design_temp/etc/2008/logo.jpg',
            label : 'Card Label 3',
            title : 'Card Title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolores dolorum tempore ad nam earum amet ipsam pariatur,',
            stat : 'card stat',
            rating : 0,
            author : 'Cielo'
        },
        {
            img: 'http://image.adidas.co.kr/upload/design_temp/etc/2008/logo.jpg',
            label : 'Card Label 4',
            title : 'Card Title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolores dolorum tempore ad nam earum amet ipsam pariatur,',
            stat : 'card stat',
            rating : 2,
            author : 'Cielo'
        },
    ]);

    useEffect (() =>{
        console.log(typeof cardobj);
    });
    
    return (
        <>
        { 
            cardobj.map((item) => (
                <div className="cardwrap">
                    <Cardimage cardobj={item} />
                    <Cardinfo cardobj={item} />
                    {item.rating === 0 ? '' : <Cardratings cardobj={item} />}
                </div>
            ))
        }
        </>
    )
}

export default Card;

