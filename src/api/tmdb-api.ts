export const getMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    ).then((response) => {
        if(!response.ok)
            throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getMovie = (id : string) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to get movie data. Response status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
};

export const getGenres = () => {
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const sortMoviesAZ = () => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}include_adult=false&include_video=false&language=en-US&page=1&sort_by=title.desc`
    )
}

export const getMovieImages = (id : string | number) => {
    return fetch(
           `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error("failed to fetch images");
        }
        return response.json();
    }).then((json) => json.posters)
    .catch((error) => {
        throw error
    });
};

export const getMovieCast = (id: string | number) => {
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
    .then((res) => res.json())
    .then((json) => {
        // console.log(json.results);
        return json.results;
    });
};

export const getMovieReviews = (id: string | number) => { // the movie id can be a string or a number
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
    .then((res) => res.json())
    .then((json) => {
        // console.log(json.results);
        return json.results;
    });
};

export const getUpcomingMovies = () => { 
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch upcoming movies. Response status: {response.status}`)
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getMoviesByYear = (year: number ) => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${year}&sort_by=primary_release_date.desc&year=${year}`

    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};


export const getTvShows = () => {
    return fetch(
       `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1` 
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch TV shows. Response status: ${response.status}`);
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getTvShow = ( id: string ) => {
    return fetch(
         `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to get tv show data. Response status: ${response.status} `);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
};

export const getTvImages = ( id: string | number ) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`  
    ).then((response) => {
        if (!response.ok) {
            throw new Error("failed to reach images");
        }
        return response.json();
    }).then((json) => json.posters)
    .catch((error) => {
        throw error
    });
};

export const getTvCast = ( id: string | number ) => {
    return fetch(
        `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=` +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getTvGenres = () => {
    return fetch(
         "https://api.themoviedb.org/3/genre/tv/list?api_key=" +
         import.meta.env.VITE_TMDB_KEY +
         "&language=en-US"
    ).then((response) => {
        if (!response.ok)
            throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
        return response.json();
    })
    .catch((error) => {
        throw error
    });
};

export const getFantasyMovies = (fantasyMovieId: string) => {
    //complete this later
};