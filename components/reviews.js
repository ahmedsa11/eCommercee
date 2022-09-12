import React,{useState} from 'react'
import Style from '../styles/star.module.css'
const StartRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  return (
    <>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}           
            className={`${Style.button} ${index <= (hover || rating) ? Style.on : Style.off}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={Style.star}>&#9733;</span>
          </button>
        );
      })}
    </div>
    </>
  )
}

export default StartRating