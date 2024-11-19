import React from 'react';
import Genres from './Genre';
import Description from './Description';
import Rating from './Rating';
import Controls from './Controls';
import Slider from './Slider';
import Limitation from './Limitation';

function Content() {
    return (
        <div className="content-wrapper">
            <Genres />
            <Description />
            <Rating />
            <Controls />
            <Slider />
            <Limitation />
        </div>
    );
}

export default Content;
