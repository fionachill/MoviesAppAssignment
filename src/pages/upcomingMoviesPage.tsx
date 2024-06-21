import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage: React.FC= () => {
    const toDo = () => true;
    const [movies, setMovies] = useState<BaseMovieProps[]>([]);

useEffect(() => {
    getUpcomingMovies().then(movies => {
        setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
    <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        selectFavourite={toDo}
        />
    );
};

export default UpcomingMoviesPage;