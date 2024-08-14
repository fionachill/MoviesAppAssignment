import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import TvList from "../components/tvShowList";
import { getTvShows } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, {
    titleFilter,
    genreFilter,
} from "../components/tvFilterUI";
import { DiscoverTvShows } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";


const titleFiltering = {
    name: "name",
    value: "",
    condition: titleFilter,
};
const genreFiltering = {
    name: "genre",
    value: "0",
    condition: genreFilter,
};

const styles = {
    root: {
        padding: "20px",
    }, fab: {
        marginTop: 8,
        position: "fixed",
        top: 2,
        right: 2,
    },
};


const TvShowsPage: React.FC = () => {
    const { data, error, isLoading, isError } = useQuery<DiscoverTvShows, Error>("discover", getTvShows);
    const { filterValues, setFilterValues, filterFunction} = useFiltering(
        [titleFiltering, genreFiltering]
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const changeFilterValues = (type: string, value: string) => {
        const changedFilter = {name: type, value: value};
        const updatedFilterSet =
        type === "name"
            ? [changedFilter, filterValues[1]]
            : [filterValues[0], changedFilter];
        setFilterValues(updatedFilterSet);
    };

    const tvshows = data ? data.results: [];
    const displayedTvShows = filterFunction(tvshows);

    return (
        <>
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <Header title={"TV Shows"} />
                </Grid>
                <Grid item container spacing={5}>
                    <TvList tvshows={displayedTvShows}></TvList>
                </Grid>
            </Grid>
    
            <TVFilterUI
                onFilterValuesChange={changeFilterValues}
                titleFilter={filterValues[0].value}
                genreFilter={filterValues[1].value}
            />
        </>    
    );
};

export default TvShowsPage;