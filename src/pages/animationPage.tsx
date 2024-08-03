import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, { titleFilter, genreFilter, } from "../components/movieFilterUI";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

// I will revisit this page as it is a bit more complicated that I anticipated. 

const styles = {
    root: {
        padding: "20px",
    },
};

const AnimationPage: React.FC<BaseMovieListProps> = ({movies}) => {
    return (
        <Grid container sx={styles.root}>
            <Grid item xs={12}>
                <Header title={"Animated Movies"} />
            </Grid>
            <Grid item container spacing={5}>
                <MovieList movies={movies}></MovieList>
            </Grid>
        </Grid>
    );
};

Export default AnimationPage;