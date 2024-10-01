import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false); 

    const handleFlip = () => {
        setIsFlipped(!isFlipped); 
    };

    return (
        <div  className={`flip-card ${flashcard.category}`}onClick={handleFlip}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <h2>{flashcard.question}</h2>
                </div>
                <div className="flip-card-back">
                    <h2>{flashcard.answer}</h2>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
