import React from 'react';

function Genres() {
    const genres = ['Drama', 'Thriller', 'Supernatural'];

    return (
        <div className="genre inter-medium">
            {genres.map((genre, index) => (
                <React.Fragment key={genre}>
                    <span>{genre}</span>
                    {index < genres.length - 1 && <span> | </span>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Genres;
