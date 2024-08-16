import React from "react";
import TvShow from "../tvCard/";
import Grid from "@mui/material/Grid";
import { BaseTvShowListProps } from "../../types/interfaces";

const TvList: React.FC<BaseTvShowListProps> = ({tvshows, action}) => {
    // eslint-disable-next-line prefer-const
    let tvShowCards = tvshows.map((t) => (
        <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TvShow key={t.id} tvshow={t} action={action} />
        </Grid>
    ));
    return tvShowCards;
}

export default TvList;