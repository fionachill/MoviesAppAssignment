import React from "react";
import Cast from "../movieCastCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieCastProps } from "../../types/interfaces";

const MovieCastList: React.FC<BaseMovieCastProps> = ({cast}) => {
    // eslint-disable-next-line prefer-const
    let castList = cast.map((c) => (
        <Grid key={c.cast_id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Cast key={c.cast_id} {...c} />
        </Grid>
    ));
    return castList;
    }
export default MovieCastList;