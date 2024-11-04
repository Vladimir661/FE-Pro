//Task 1
async function getFetchUser (userId) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await res.json();
        console.log(`Ім'я користувача: ${user.name}, Електрона почта: ${user.email}`)
    }
    catch (error) {
        console.error(`Error fetching user data!!!`, error.message);
    }
}

// getFetchUser(2);
// getFetchUser(10);
//Task 2 
async function getFetchFilm (filmId) {
    try {
        const res = await fetch(`https://swapi.dev/api/films/${filmId}`);
        const film = await res.json();
        console.log(`Назва фільму: ${film.title} Рік випуску: ${film.release_date}`)
    }
    catch (error) {
        console.error(`Error fetching film data!!!`, error.message);
    }
}

// getFetchFilm(1);
// getFetchFilm(3);
// getFetchFilm(5);
// getFetchFilm(6);

export {getFetchUser,getFetchFilm};

