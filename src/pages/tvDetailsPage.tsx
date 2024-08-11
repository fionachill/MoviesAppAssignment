import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TvDetailsProps, TvImage, BaseTvCastListProps} from "../types/interfaces";
import { getTvShow, getTvImages, getTvCast } from "../api/tmdb-api";
import TvCreditsList from "../components/tvCredits";

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
    const [credits, setCredits] = useState<BaseTvCastListProps[]>([]);

    useEffect(() => {
        getTvShow(id ?? "").then((tvshow) => {
            setTvshow(tvshow);
        });
    }, [id]);

    useEffect(() => {
      getTvImages(id ?? "").then((images) => {
        setImages(images);
      });
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    useEffect(() => {
        getTvCast(id ?? "").then((credits) => {
        setCredits(credits);
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
                    <Grid item xs={9}>
                        <TvCreditsList credits={credits} />
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