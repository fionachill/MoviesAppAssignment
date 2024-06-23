import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
    mustWatch: number[];
    favourites: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addReview: ((movie: BaseMovieProps, review: Review) => void);
    addToMustWatch: ((movie: BaseMovieProps) => void);
}

const intialContextState: MovieContextInterface = {
    mustWatch: [],
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addReview: (movie, review) => { movie.id, review},
    addToMustWatch: () => {},
};

export const MoviesContext = React.createContext<MovieContextInterface>(intialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] );
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [ ...prevFavourites, movie.id ];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !==movie.id));
    }, []);

    const addReview = (movie: BaseMovieProps, review: Review) => {
        setMyReviews( {...myReviews, [movie.id]: review})
    };

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatches) => {
            if (!prevMustWatches.includes(movie.id)) {
                return [...prevMustWatches, movie.id];
            }
            return prevMustWatches;
        });
    }, []);

    // I don't need this just yet but laying the ground work for future use.
    // const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
    //     setMustWatch((prevMustWatches) => prevMustWatches.filter(mId) => mId !== movie.id));
    // }, []);

    return ( 
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addToMustWatch,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
