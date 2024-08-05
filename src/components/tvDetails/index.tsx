import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { TvDetailsProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
};

const TvDetails: React.FC<TvDetailsProps> = (tvshow) => {

    return (
        <>
           <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {tvshow.overview}    
            </Typography> 

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                {tvshow.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
                <Chip icon={<AccessTimeIcon />} label="How many episodes?" />
                <Chip icon={<MonetizationIcon />} label="Budget?" />
                <Chip
                    icon={<StarRate />}
                    label={`${tvshow.vote_average} (${tvshow.vote_count}`}
                />
                <Chip label={`Release: ${tvshow.first_air_date}`} />
            </Paper>
        </>
    );
};
export default TvDetails;