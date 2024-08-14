import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {  TvImage} from "../types/interfaces";
import {  getTvImages } from "../api/tmdb-api";
// import TvCreditsList from "../components/tvCredits";
import useTV from "../hooks/useTVShow.ts";
import { getTvShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvDetailsProps } from "../types/interfaces";

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
    const { data: tvshow, error, isLoading, isError } = useQuery<TvDetailsProps, Error>(
        ["tvshow", id],
        ()=> getTvShow(id||"")
    );


    // const [tvshow] = useTV(id ?? "");
    // // const [tvshow, setTvshow ] = useState<TvDetailsProps>();
    const [images, setImages] = useState<TvImage[]>([]);
    // const [credits, setCredits] = useState<BaseTvCastListProps[]>([]);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }

    useEffect(() => {
      getTvImages(id ?? "").then((images) => {
        setImages(images);
      });
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//     useEffect(() => {
//         getTvCast(id ?? "").then((credits) => {
//         setCredits(credits);
//     });
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

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
                    {/* <Grid item xs={9}>
                        <TvCreditsList credits={credits} />
                    </Grid> */}
                </Grid>
                </>
            ) : (
            <h2>Waiting for API data</h2>
    )}
        </>
    );
};

export default TvPage;