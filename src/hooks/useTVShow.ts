import { useEffect, useState } from "react";
import { getTVShow } from "../api/tmdb-api";
import { TVDetailsProps } from "../types/interfaces";

type TVHookReturnType = [TVDetailsProps | undefined, React.Dispatch<React.SetStateAction<TVDetailsProps | undefined>>];

const useTV = (id: string):TVHookReturnType => {
    const [tvshow, setTVShow] = useState<MovieDetailsProps>();
    useEffect(() => {
        getTVShow(id).then(tvshow => {
            setTVShow(tvshow);
        });
    }, [id]);
    return [tvshow, setTVShow];
};

export default useTV;