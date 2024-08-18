import React from "react";
import MovieHeader from "../headerMovie";
import MovieCastList from "../movieCastList"
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages, getMovieCast } from "../../api/tmdb-api";
import { MovieImage, MovieDetailsProps, MovieCastListProps, MovieCast } from "../../types/interfaces";
import { useQuery } from "react-query";
import { useQueries } from "react-query";
import Spinner from "../spinner";

const styles = {
    gridListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTitle: {
        width: 450,
        height: '100vh',
    },
};

interface TemplateMoviePageProps {
    movie: MovieDetailsProps;
    children: React.ReactElement;
    cast: MovieCastListProps;
}

const TemplateMoviePage: React.FC<TemplateMoviePageProps> = ({movie, children, cast}) => {
    const [ imagesQuery, castQuery ] = useQueries({
        queries: [
            {
                queryKey: ["images", movie.id],
                queryFn: () => 
                    getMovieImages(movie.id)
            },

            {
                queryKey: ["cast", movie.id],
                queryFn: () => 
                    getMovieCast(movie.id)
            },
        ],
    });
    
    if (imagesQuery.isLoading) return <Spinner />;
    if (castQuery.isLoading) return <Spinner />;

    if (imagesQuery.isError) {
        return <h1>{(imagesQuery.error as Error).message}</h1>;
    }

    if (castQuery.isError) {
        return <h1>{(castQuery.error as Error).message}</h1>;
    }   
    
    // const { data: movieImages, error: imagesError, isLoading: imagesLoading , isError: imagesIsError } = useQuery<MovieImage[], Error>(
    //     ["images", movie.id],
    //     () => getMovieImages(movie.id)
    // );

    // if (imagesLoading) {
    //     return <Spinner />;
    // }

    // if (imagesIsError) {
    //     return <h1>{(imagesError
            
    //     ).message}</h1>;
    // }

    

    // const { data: castData, error: castError, isLoading: castLoading, isError: castIsError } = useQuery<MovieCast[], Error>(
    //     ["cast", movie.id],
    //     () => getMovieCast(movie.id)
    // );  

    // if (castLoading) {
    //     return <Spinner />;
    // }

    // if (castIsError) {
    //     return <h1>{(castError
    //     ).message}</h1>
    // }



   const images = imagesQuery.data as MovieImage[];   
    const displayedCast = castQuery.data as MovieCast[];


    return (
        <>
            <MovieHeader {...movie} />

            <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                    <div>
                        <ImageList cols={1}>
                            {images.map((image: MovieImage) => (
                                <ImageListItem 
                                key={image.file_path}
                                sx={styles.gridListTitle}
                                cols={1}
                                >
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                    alt={'Image alternative'}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>
                <Grid item xs={9}>
                    <MovieCastList cast={displayedCast} />
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateMoviePage;