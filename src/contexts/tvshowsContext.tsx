import React, { useState, useCallback } from "react";
import { BaseTvShowProps } from "../types/interfaces";

interface TvShowContextInterface {
    favourites: number[];
    addToFavourites: ((tvshow: BaseTvShowProps) => void);
    removeFromFavourites: ((tvshow: BaseTvShowProps) => void);
}
const initialContextState: TvShowContextInterface ={
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {}
};

export const TvShowsContext = React.createContext<TvShowContextInterface>(initialContextState);

const TvShowsContextProvider: React.FC<React.PropsWithChildren> = ({ children}) => {
    const [favourites, setFavourites] = useState<number[]>([]);

    const addToFavourites = useCallback((tvshow: BaseTvShowProps) => {
        setFavourites((prevFavourites)  => {
            if (!prevFavourites.includes(tvshow.id)) {
                return [...prevFavourites, tvshow.id];
            }
            return prevFavourites;
        });
    
}, []);

const removeFromFavourites = useCallback((tvshow: BaseTvShowProps) => {
    setFavourites((prevFavourites) => prevFavourites.filter((tId) => tId !== tvshow.id));
}, []);

    return (
        <TvShowsContext.Provider 
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites
            }}
        >
            {children}
        </TvShowsContext.Provider>
    );
};

export default TvShowsContextProvider;