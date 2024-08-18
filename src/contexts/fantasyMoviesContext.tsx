import React, { useState } from "react";
import { FantasyMovieProps } from "../types/interfaces";

interface FantasyMovieContextInterface {
    fantasymovies: FantasyMovieProps[];
    addFantasyMovie: (fantasymovie: FantasyMovieProps) => void;
}

const initialContextState: FantasyMovieContextInterface = {
    fantasymovies: [],
    addFantasyMovie: (fantasymovie) => {fantasymovie}
};

export const FantasyMoviesContext = React.createContext<FantasyMovieContextInterface>(initialContextState);

const FantasyMoviesContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [fantasymovies, setFantasyMovies] = useState<FantasyMovieProps[]>( [] )
    
    const addFantasyMovie = (fantasymovie: FantasyMovieProps ) => { 
        localStorage.setItem(fantasymovie.id, JSON.stringify(fantasymovie));
        setFantasyMovies( { ...fantasymovies, [fantasymovie.id]: fantasymovie })
    };

    return (
        <FantasyMoviesContext.Provider 
            value={{
                fantasymovies, 
                addFantasyMovie,
            }}
        >
            {children}
        </FantasyMoviesContext.Provider>
    );
};

export default FantasyMoviesContextProvider;