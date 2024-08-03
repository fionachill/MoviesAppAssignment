import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import img from '../../images/film-poster-placeholder.png';
import { BaseTvShowProps } from "../../types/interfaces";

const styles = {
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
};

const TvCard: React.FC<BaseTvShowProps> = (tvshow) => {

    return (
        <Card sx={styles.card}>
            <CardHeader title={tvshow.name} />
            <CardMedia 
                sx={styles.media}
                image={
                    tvshow.poster_path
                        ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${tvshow.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {tvshow.first_air_date}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favourites">
                    <FavoriteIcon color="primary"  fontSize="large"/>
                </IconButton>
                <Button variant="outlined" size="medium" color="primary">
                    More info....
                </Button>
            </CardActions>
        </Card>
    );
}

export default TvCard;