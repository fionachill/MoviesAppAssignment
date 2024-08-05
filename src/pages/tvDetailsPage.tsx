import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TvDetailsProps, TvImage } from "../types/interfaces";

const styles = {
    imageListRoot: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    gridListTile: {
        width: "100%",
        height: "auto",
    },

};

const TvPage: React.FC= () => {

    const { id } = useParams();
    const [tvshow, setTvshow ] = useState<TvDetailsProps>();
    const [images, setImages] = useState<TvImage[]>([]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
        )
        .then((res) => {
            return res.json();
        })
        .then((tvshow) => {
            setTvshow(tvshow);
        });
    }, [id]);

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`  
        )
        .then((res) => res.json())
        .then((json) => json.posters)
        .then((images) => {
          setImages(images);
    });
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <>
            {tvshow ? (
                <>
                <Grid container spacing={5} style={{padding: "15px" }}>
                    <Grid item xs={3}>
                        <div >
                            <ImageList sx={styles.imageListRoot} cols={1}>
                                {images.map((image) => (
                                <ImageListItem 
                                    key={image.file_path}
                                    sx={styles.gridListTile}
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
                        <TvDetails {...tvshow} />
                    </Grid>
                </Grid>
                </>
            ) : (
            <h2>Waiting for API data</h2>
    )}
        </>
    );
};

export default TvPage;