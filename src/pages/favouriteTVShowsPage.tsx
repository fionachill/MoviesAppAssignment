import React, { useContext } from "react";
import PageTemplate from "../components/templateTVListPage";
import { TvShowsContext } from "../contexts/tvshowsContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import TVFilterUI, { titleFilter, genreFilter } from "../components/tvFilterUI";

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

const FavouriteTVShowsPage: React.FC= () => {
    const { favourites: tvIds } = useContext(TvShowsContext);
    const { filterValues, setFilterValues, filterFunction } = useFiltering(
        [titleFiltering, genreFiltering]
    );

    const favouriteTvShowQueries = useQueries(
        tvIds.map((tvId) => {
            return {
                queryKey: ["tv", tvId],
                queryFn: () => getTvShow(tvId.toString()),
            };
        })
    );

    const isLoading = favouriteTvShowQueries.find((t) => t.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const allFavourites = favouriteTvShowQueries.map((q) => q.data);
    const displayedTvShows = allFavourites
        ? filterFunction(allFavourites)
        : [];

    const changeFilterValues = (type: string,  value: string) => {
        const changedFilter = { name: type, value: value };
        const updatedFilterSet =
            type === "name" ? [changedFilter, filterValues[1]] : [filterValues[0], changedFilter];
        setFilterValues(updatedFilterSet);
    };

    const toDo = () => true;
 

    return (
        <>
            <PageTemplate
                name="Favourite TV Shows"
                tvshows={displayedTvshows}
                selectFavourite={toDo}
            />
            <TVFilterUI
                onFilterValuesChange={changeFilterValues}
                titleFilter={filterValues[0].value}
                genreFilter={filterValues[1].value}
            />
        </>
    );
}

export default FavouriteTVShowsPage;