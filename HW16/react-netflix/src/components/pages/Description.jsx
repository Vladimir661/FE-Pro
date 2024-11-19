import React from 'react';

function Description() {
    return (
        <div>
            <div className="name inter-extra-bold">
                <span>Stranger Things</span>
            </div>
            <div className="information">
                <h2 className="year inter-regular">
                    2019
                </h2>
                <h2 className="director inter-regular">
                    <span>DIRECTOR:</span>
                </h2>
                <h2 className="text gray">Shawn Levy</h2>
                <h2 className="season inter-regular">
                    <span>seasons:</span>
                </h2>
                <h2 className="text gray">3 (5 Episodes)</h2>
            </div>
            <p className="description gray inter-regular">
                In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
            </p>
        </div>
    );
}

export default Description;