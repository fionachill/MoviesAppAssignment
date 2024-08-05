import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage"; 
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import TvShowsPage from "./pages/tvShowsPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import {tvImage} from "./types/interfaces";
import sample from "./stories/sampleTvData";

const tvshows = [sample, sample, sample, sample, sample, sample, sample ];
const tvImages: tvImage[] = [
    { file_path: "/r9KaBE7i4ovg8uSppQrCp6ZdPD9.jpg"},
    { file_path: "/npD65vPa4vvn1ZHpp3o05A5vdKT.jpg" },
    { file_path: "/ecl98P5f0S9rrZjTDHhuz1yEZA3.jpg" },
];

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <SiteHeader />
                    <MoviesContextProvider>
                        <Routes>
                            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
                            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
                            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
                            <Route path="/movies/:id" element={<MoviePage />} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/tv" element={<TvShowsPage tvshows={tvshows} />} />
                            <Route path="tv/:id" element={<TvDetailsPage tvshow={sample} images={tvImages} />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </MoviesContextProvider>  
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)