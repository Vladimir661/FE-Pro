import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Rating() {
    const [currentRating, setCurrentRating] = useState(0);

    const updateStarColors = (rating) => {
        setCurrentRating(rating);
    };

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <span 
                    key={value} 
                    className="star"
                    onClick={() => updateStarColors(value)}
                    data-value={value}
                >
                    <FontAwesomeIcon 
                        icon={value <= currentRating ? 'fa-solid fa-star' : 'fa-regular fa-star'} 
                        size="2x"
                        className={value <= currentRating ? 'yellow-star' : 'white-star'}
                    />
                </span>
            ))}
        </div>
    );
}

export default Rating;

