import React from "react";
import { BaseCastProps } from "../../types/interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from '../../images/film-poster-placeholder.png';

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255,0,0)",
    },
};

const CrewCard: React.FC<BaseCastProps> = (credits, cast) => {

    return (
        <Card sx={styles.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={styles.media}
                    image={
                        cast.profile_path
                            ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`
                            : img
                    }
                    alt={cast.name}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cast.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cast.roles.character || cast.roles.job}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CrewCard;