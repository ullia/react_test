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

    // const ratingFill = (rating) => {
    //     var ratingFillArr = [];        

    //     for (let i = 0; i < rating; i++) {
    //         const element = <li><span className="ratingCircle on"></span></li>;
    //         ratingFillArr.push(element);
    //     }       
    //     console.log(ratingFillArr);        
    //     return ratingFillArr;        
    // }

    // const ratingEmpty = () => {
    //     var ratingEmptyArr = [];

    //     for (let j = 0; j < 5 - rating; j++) {
    //         const element = <li><span className="ratingCircle"></span></li>;
    //         ratingEmptyArr.push(element);
    //     }

    //     console.log(ratingEmptyArr);
    //     return ratingEmptyArr;
    // }

    const drawRating = (rating) => {
        const max = 5;
        const ratingArr = [];

        for (let i = 1; i <= max; i++) {
            if (i > rating) {
                ratingArr.push(
                    <li key={i}>
                        <span className="ratingCircle"></span>
                    </li>
                );
            } else {
                ratingArr.push(
                    <li key={i}>
                        <span className="ratingCircle on"></span>
                    </li>
                );
            }
        }

        return ratingArr;
    };
    
    return (
        <div className="cardratings">
            <ul>
                {/* {ratingFill(rating)}
                {ratingEmpty(rating)} */}
                {drawRating(rating)}
            </ul>
            <span className="author">
                {author}
            </span>
        </div>
    )
}

export default Cardratings;
