import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTVPage";
import { getTvShow } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvDetailsProps } from "../types/interfaces";



const TvDetailsPage: React.FC= () => {
    const { id } = useParams();
    const { data: tvshow, error, isLoading, isError } = useQuery<TvDetailsProps, Error>(
        ["tvshow", id],
        ()=> getTvShow(id||"")
    );


    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{(error as Error).message}</h1>;
    }


    return (
        <>
            {tvshow ? (
                <>
                    <PageTemplate tvshow={tvshow}>
                        <TvDetails {...tvshow} />
                    </PageTemplate>
                </>
            ) : (
            <h2>Waiting for API data</h2>
    )}
        </>
    );
};

export default TvDetailsPage;