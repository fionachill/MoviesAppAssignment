import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces";
import { Link } from "react-router-dom";

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
    //const context = useContext(MoviesContext);
    
    return (
        <PlaylistAddIcon color="primary" fontSize="large" />
    );
};

export default AddToMustWatchIcon;