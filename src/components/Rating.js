import React from 'react'
import StarRatingComponent from "react-star-rating-component";

function Rating({setRating, rating}) {



  return (
    <div>
    <StarRatingComponent starCount={5} value={rating} onStarClick={(nextValue)=>setRating(nextValue)} emptyStarColor="#FAF4F4"  />

    </div>
  )
}

export default Rating