import React, {useState} from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Detail() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
    console.log(rating);
  
  
    return (
        <div>
        
            <div>상세페이지</div>
            <Rating
                size="15"
                
                onClick={handleRating}
            />
        
        
        
        
        
        
        
        
        
        </div>
    )
}
