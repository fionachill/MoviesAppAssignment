import React from "react";
import PageTemplate from "../components/templateTVListPage"; 
import { getTvShows } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, {
    titleFilter,
    genreFilter,
} from "../components/tvFilterUI";
import { DiscoverTvShows } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToTvFavourites";
import { BaseTvShowProps } from "../types/interfaces";

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

    // const favourites = tvshows.filter(t => t.favourite);
    // localStorage.setItem("favourites", JSON.stringify(favourites));
    // const addToTVFavourites = (tvId: number) => true;

    return (
        <>
            <PageTemplate
                name="Discover TV Shows"
                tvshows={displayedTvShows}
                action={(tvshow: BaseTvShowProps) => {
                    return <AddToFavouritesIcon {...tvshow} />
                }}
            />    
            <TVFilterUI
                onFilterValuesChange={changeFilterValues}
                titleFilter={filterValues[0].value}
                genreFilter={filterValues[1].value}
            />
        </>    
    );
};

export default TvShowsPage;