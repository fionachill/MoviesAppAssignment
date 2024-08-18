import React, { useContext} from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import FantasyMoviesList from "../components/fantasyMoviesList";
import { FantasyMovieListProps } from "../types/interfaces";
// import { FantasyMoviesContext } from "../contexts/fantasyMoviesContext";
import sampleFantasyMovies from "../stories/sampleFantasyMovies";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const styles = {
    root: {
        backgroundColor: "bfbfbf",
    },
};

const fantasymovies = [ sampleFantasyMovies, sampleFantasyMovies, sampleFantasyMovies ];


const FantasyMovieListPage: React.FC< FantasyMovieListProps > = () =>{
    // const { fantasymovies } = useContext(FantasyMoviesContext); 

    const title = "Fantasy Movies";
    
    return (
        <>
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <Header title={title} />
                </Grid>
                <Grid item container spacing = {8}>
                    <Link to={`/addfantasymovie/form`}>
                        <Button variant="contained">
                            Create Fantasy Movie
                        </Button>
                    </Link>
                </Grid>
                <Grid item container spacing={5}>
                    <FantasyMoviesList
                        fantasymovies={fantasymovies}
                    >
                </FantasyMoviesList>
                </Grid>
            </Grid>   
        </>
        
    );
}
export default FantasyMovieListPage;