import React from 'react'

const Cardratings = ({ cardobj }) => {
    const { author, rating } = cardobj;
    
    console.log(rating);
    // 선택한 요소 앞의 모든 index를 배열에 담는 함수
    // const prevAll = (element) => {
    //     var result = [];

    //     while (element = element.previousElementSibling)
    //         result.push(element);
    //     return result;
    // }

    const ratingFill = (rating) => {
        var ratingFillArr = [];        

        for (let i = 0; i < rating; i++) {
            const element = <li><span className="ratingCircle on"></span></li>;
            ratingFillArr.push(element);
        }       
        console.log(ratingFillArr);        
        return ratingFillArr.map(ratingOn => ratingOn);        
    }

    const ratingEmpty = () => {
        var ratingEmptyArr = [];

        for (let j = 0; j < 5 - rating; j++) {
            const element = <li><span className="ratingCircle"></span></li>;
            ratingEmptyArr.push(element);
        }

        console.log(ratingEmptyArr);
        return ratingEmptyArr.map(ratingOn => ratingOn);
    }
    
    return (
        <div className="cardratings">
            <ul>
                {ratingFill(rating)}
                {ratingEmpty(rating)}
            </ul>
            <span className="author">
                {author}
            </span>
        </div>
    )
}

export default Cardratings;
