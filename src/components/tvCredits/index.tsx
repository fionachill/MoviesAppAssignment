import React from "react";
import Grid from "@mui/material/Grid";
import CrewCard from "../tvCreditCard"; 
import { BaseTvCastListProps } from "../../types/interfaces";

const TvCreditsList: React.FC<BaseTvCastListProps> = ({credits}) => {
    // eslint-disable-next-line prefer-const
    let creditsList = credits.map((c) => (
        <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <CrewCard key={c.id} {...c} />
        </Grid>
    ));
    return creditsList; 
}

export default TvCreditsList;