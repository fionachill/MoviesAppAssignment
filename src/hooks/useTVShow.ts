import { useEffect, useState } from "react";
import { getTvShow } from "../api/tmdb-api";
import { TvDetailsProps } from "../types/interfaces";

type TVHookReturnType = [TvDetailsProps | undefined, React.Dispatch<React.SetStateAction<TvDetailsProps | undefined>>];

const useTV = (id: string):TVHookReturnType => {
    const [tvshow, setTVShow] = useState<TvDetailsProps>();
    useEffect(() => {
        getTvShow(id).then(tvshow => {
            setTVShow(tvshow);
        });
    }, [id]);
    return [tvshow, setTVShow];
};

export default useTV;