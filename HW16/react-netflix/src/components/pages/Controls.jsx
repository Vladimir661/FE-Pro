import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Controls() {
    return (
        <div className="button">
                <button className="stream inter-medium">
                    STREAM NOW
                    <FontAwesomeIcon icon="fa-solid fa-circle-play" size="xl" />
                </button>
                
                <button className="all inter-medium">
                    ALL EPISODES
                </button>
        </div>
    );
}

export default Controls;