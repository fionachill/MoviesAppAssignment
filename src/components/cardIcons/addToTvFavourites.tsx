import React, {MouseEvent, useContext } from "react";
import { TvShowsContext } from "../../contexts/tvshowsContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {BaseTvShowProps} from "../../types/interfaces";

const AddToTvFavouritesIcon: React.FC<BaseTvShowProps> = (tvshow) => {
    const context = useContext(TvShowsContext);

    const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        context.addToFavourites(tvshow);
    };
    return (
        <IconButton aria-label="add to favourites" onClick={onUserSelect}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToTvFavouritesIcon;