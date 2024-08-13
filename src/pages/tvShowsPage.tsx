import React, { useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import TvList from "../components/tvShowList";
import { Drawer, Fab } from "@mui/material";
// import FilterTvShowsCard from "../components/filterTvShowsCard";
import { getTvShows } from "../api/tmdb-api";
// import { SelectChangeEvent } from "@mui/material";
import { BaseTvShowProps } from "../types/interfaces";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, {
    titleFilter,
    genreFilter,
} from "../components/tvFilterUI";

const titleFiltering = {
    name: "title",
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


const TvShowsPage: React.FC= () => {
    const [tvshows, setTvShows] = useState<BaseTvShowProps[]>([]);
    // const [titleFilter, setTitleFilter] = useState("");
    // const [genreFilter, setGenreFilter] = useState("0");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { filterValues, setFilterValues, filterFunction} = useFiltering(
        [titleFiltering, genreFiltering]
    );

    const changeFilterValues = (type: string, value: string) => {
        const changedFilter = {name: type, value: value};
        const updatedFilterSet =
        type === "title"
            ? [changedFilter, filterValues[1]]
            : [filterValues[0], changedFilter];
        setFilterValues(updatedFilterSet);
    };

    // const genreId = Number(genreFilter);
    // // eslint-disable-next-line prefer-const
    // let displayedTvShows = tvshows
    // .filter((t: BaseTvShowProps) => {
    //     return t.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    // })
    // .filter((t: BaseTvShowProps) => {
    //     return genreId > 0 ? t.genre_ids?.includes(genreId) : true;
    // });

    // const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
    //     e.preventDefault();
    //     if (type === "title") setTitleFilter(value);
    //     else setGenreFilter(value);
    // };

useEffect(() => {
    getTvShows().then(tvshows => {
        setTvShows(tvshows);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
        <Fab
            color="secondary"
            variant="extended"
            onClick={() => setDrawerOpen(true)}
            sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <TVFilterUI
                    onFilterValuesChange={changeFilterValues}
                    titleFilter={filterValues[0].value}
                    genreFilter={filterValues[1].value}
                />
            </Drawer>
        </>    
    );
};

export default TvShowsPage;