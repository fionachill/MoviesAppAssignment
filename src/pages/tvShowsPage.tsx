import React, { useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import TvList from "../components/tvShowList";
import { BaseTvShowProps } from "../types/interfaces";

const styles = {
    root: {
        padding: "20px",
    },
};

const TvShowsPage: React.FC= () => {

    const [tvshows, setTvShows] = useState<BaseTvShowProps[]>([]);

useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1`
    )
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        return json.results;
    })
    .then((tvshows) => {
        setTvShows(tvshows);
    });
}, []);

    return (
        <Grid container sx={styles.root}>
            <Grid item xs={12}>
                <Header title={"TV Shows"} />
            </Grid>
            <Grid item container spacing={5}>
                <TvList tvshows={tvshows}></TvList>
            </Grid>
        </Grid>
    );
};

export default TvShowsPage;