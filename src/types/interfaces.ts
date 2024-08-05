export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined ;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
}

export interface BaseMovieListProps {
    movies: BaseMovieProps[];
    action: (m: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
        id: number;
        name: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
}

export interface MovieImage {
    file_path: string;
    aspect_ratio?: number; //some props are optional... the property may not be present but that won't cause issues
    height?: number;
    iso_639_1?: string;
    vote_average?: number;
    vote_count?: number;
    width?: number; 
}

export interface MoviePageProps {
    movie: MovieDetailsProps;
    images: MovieImage[];
}

export interface MovieListPageTemplateProps extends BaseMovieListProps {
    title: string;
}

export interface Review {
    id: string;
    content: string;
    author: string;
}

export interface GenreData {
    genres: {
        id: string;
        name: string
    }[];
}



export interface DiscoverMovies {
    page: number;
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
}

export interface UpcomingMovies {
    page: number;
    total_pages: number;
    total_results: number;
    results: BaseMovieProps[];
}

export interface BaseTvShowProps {
    backdrop_path?: string,
    genre_ids?: number[],
    id: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path?: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: string,
    genre_ids?: number[];
}

export interface BaseTvShowListProps {
    tvshows: BaseTvShow[];
}

export interface TvDetailsProps extends BaseTvShowProps {
    genres: {
       id: number;
       name: string; 
    }[];
}

export interface TvImage {
    aspect_ratio?: number,
    height?: number,
    iso_639_1?: string,
    file_path: string,
    vote_average?: number,
    vote_count?: number,
    width?: number
}

export interface TvPageProps {
    tvshow: TvDetailsProps;
    images: TvImage[];
}

export interface Review {
    author: string,
    content: string,
    agree: boolean,
    rating: number,
    movieId: number,
}

export type FilterOption = "title" | "genre";