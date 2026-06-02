const TMDB_BASE = "https://image.tmdb.org/t/p/w500";

const MOVIES = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        duration: 148,
        rating: 8.8,
        year: 2010,
        director: "Christopher Nolan",
        ageRating: "PG-13",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        price: 12,
        posterCode: "INC",
        posterUrl: TMDB_BASE + "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        duration: 152,
        rating: 9.0,
        year: 2008,
        director: "Christopher Nolan",
        ageRating: "PG-13",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        price: 11,
        posterCode: "TDK",
        posterUrl: TMDB_BASE + "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        duration: 169,
        rating: 8.6,
        year: 2014,
        director: "Christopher Nolan",
        ageRating: "PG-13",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        price: 13,
        posterCode: "INT",
        posterUrl: TMDB_BASE + "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        genre: "Crime",
        duration: 154,
        rating: 8.9,
        year: 1994,
        director: "Quentin Tarantino",
        ageRating: "R",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        price: 10,
        posterCode: "PF",
        posterUrl: TMDB_BASE + "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
    },
    {
        id: 5,
        title: "The Matrix",
        genre: "Sci-Fi",
        duration: 136,
        rating: 8.7,
        year: 1999,
        director: "The Wachowskis",
        ageRating: "R",
        description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        price: 11,
        posterCode: "MTX",
        posterUrl: TMDB_BASE + "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
        id: 6,
        title: "Forrest Gump",
        genre: "Drama",
        duration: 142,
        rating: 8.8,
        year: 1994,
        director: "Robert Zemeckis",
        ageRating: "PG-13",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other history unfold from the perspective of an Alabama man.",
        price: 10,
        posterCode: "FG",
        posterUrl: TMDB_BASE + "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    },
    {
        id: 7,
        title: "Parasite",
        genre: "Drama",
        duration: 132,
        rating: 8.5,
        year: 2019,
        director: "Bong Joon Ho",
        ageRating: "R",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        price: 12,
        posterCode: "PAR",
        posterUrl: TMDB_BASE + "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    },
    {
        id: 8,
        title: "The Grand Budapest Hotel",
        genre: "Comedy",
        duration: 99,
        rating: 8.1,
        year: 2014,
        director: "Wes Anderson",
        ageRating: "R",
        description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years.",
        price: 9,
        posterCode: "GBH",
        posterUrl: TMDB_BASE + "/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg"
    },
    {
        id: 9,
        title: "Spirited Away",
        genre: "Animation",
        duration: 125,
        rating: 8.6,
        year: 2001,
        director: "Hayao Miyazaki",
        ageRating: "PG",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        price: 9,
        posterCode: "SA",
        posterUrl: TMDB_BASE + "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
    },
    {
        id: 10,
        title: "Dune: Part Two",
        genre: "Sci-Fi",
        duration: 166,
        rating: 8.5,
        year: 2024,
        director: "Denis Villeneuve",
        ageRating: "PG-13",
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        price: 14,
        posterCode: "DN2",
        posterUrl: TMDB_BASE + "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
    },
    {
        id: 11,
        title: "Oppenheimer",
        genre: "Drama",
        duration: 180,
        rating: 8.3,
        year: 2023,
        director: "Christopher Nolan",
        ageRating: "R",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        price: 13,
        posterCode: "OPP",
        posterUrl: TMDB_BASE + "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
    },
    {
        id: 12,
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: 142,
        rating: 9.3,
        year: 1994,
        director: "Frank Darabont",
        ageRating: "R",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        price: 10,
        posterCode: "SR",
        posterUrl: TMDB_BASE + "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    }
];

const HALLS = [
    { id: 1, name: "Hall A (IMAX)" },
    { id: 2, name: "Hall B (Standard)" },
    { id: 3, name: "Hall C (VIP)" }
];

function generateShowtimes(movieId) {
    const showtimes = [];
    const times = ["10:30", "13:45", "16:20", "19:00", "21:30"];
    const today = new Date();

    for (let day = 0; day < 5; day++) {
        const date = new Date(today);
        date.setDate(today.getDate() + day);
        const dateStr = date.toISOString().split('T')[0];

        const dayTimes = times.slice(0, 3 + ((movieId + day) % 3));
        dayTimes.forEach((time, i) => {
            showtimes.push({
                id: `${movieId}-${dateStr}-${time}`,
                movieId: movieId,
                date: dateStr,
                time: time,
                hallId: HALLS[(movieId + i + day) % HALLS.length].id
            });
        });
    }
    return showtimes;
}
