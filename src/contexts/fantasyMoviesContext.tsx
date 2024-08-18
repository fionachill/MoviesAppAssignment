import React, { useState } from "react";
import { FantasyMovieProps } from "../types/interfaces";

interface FantasyMovieContextInterface {
    addFantasyMovie: (fantasymovie: FantasyMovieProps) => void;
}

const initialContextState: FantasyMovieContextInterface = {
    addFantasyMovie: (fantasymovie) => {fantasymovie}
};

export const FantasyMoviesContext = React.createContext<FantasyMovieContextInterface>(initialContextState);

const FantasyMoviesContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [myFantasyMovies, setMyFantasyMovies] = useState<FantasyMovieProps[]>( [] )
    
    const addFantasyMovie = (fantasymovie: FantasyMovieProps ) => {
        setMyFantasyMovies({ ...myFantasyMovies, [fantasymovie.id]: fantasymovie })
    };

    return (
        <FantasyMoviesContext.Provider 
            value={{ 
                addFantasyMovie,
            }}
        >
            {children}
        </FantasyMoviesContext.Provider>
    );
};

export default FantasyMoviesContextProvider;