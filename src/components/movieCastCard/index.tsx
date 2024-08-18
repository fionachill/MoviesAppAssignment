import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { MovieCast } from "../../types/interfaces";
import img from "../../images/film-poster-placeholder.png";

const styles = {
    card: {maxWidth: 250 },
    media: { height: 250 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    }, 
};


const MovieCastCard: React.FC<MovieCast> = (cast) => {

    return ( 
        <Card sx={styles.card}>
            <CardMedia
                sx={styles.media}
                image={
                    cast.profile_path
                    ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`
                    : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="p">
                            {cast.name}  
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                            Role(s): {cast.character}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favourites">
                    <FavoriteIcon color="primary" fontSize="large" />
                </IconButton>
                <Button variant="outlined" size="medium" color="primary">
                    View Profile
                </Button>
            </CardActions>
        </Card>
    );
}

export default MovieCastCard;