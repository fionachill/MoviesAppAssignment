import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import TvList from "../components/tvShowList";
import { BaseTvShowListProps } from "../types/interfaces";

const styles = {
    root: {
        padding: "20px",
    },
};

const TvShowsPage: React.FC<BaseTvShowListProps> = ({tvshows}) => {
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