import React from 'react'
import { FaStar } from 'react-icons/fa';

function RatingBar({rate}) {
    const clampedRate = Math.min(10, Math.max(0, rate));

    return (
      <div className="d-flex justify-content-center align-items-center p-1" >
        {Array.from({ length: 10 }, (_, index) => (
          <FaStar
            key={index}
            color={index < clampedRate ? 'gold' : 'lightgray'}
            size={24} 
          />
        ))}
      </div>
    );
}

export default RatingBar
