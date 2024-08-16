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
    cast:{
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order?: number;
        job?: string;
    }[];
}

export interface BaseMovieCastProps extends BaseMovieProps{
    id: number;
    cast: MovieCast[];
}

export interface MovieCast{
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order?: number;
    job?: string;
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
    cast: MovieCast[];
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
}

export interface BaseTvShowListProps {
    tvshows: BaseTvShowProps[];
    action: (t: BaseTvShowProps) => React.ReactNode;
}

export interface TVListPageTemplateProps extends BaseTvShowListProps {
    name: string;
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

export interface DiscoverTvShows {
    page: number,
    total_pages: number,
    total_results: number,
    results: BaseTvShowProps[];
}

export interface BaseCastProps {
    id: number, 
    cast: [
        adult: boolean,
        gender: number,
        id: number,
        known_for_department: string,
        name: string,
        original_name?: string,
        popularity?: number,
        profile_path?: string,
        roles?: [
            {
                credit_id: string,
                character: string,
                episode_count: number
            }
        ],
        total_episode_count?: number,
        order?: number,
        jobs?: [
            {
                credit_id: string,
                job: string,
                episode_count: number
            }
        ],
        department?: string,
    ] 
}

export interface BaseTvCastListProps {
    credits: BaseCastProps[];
}

export interface Person {
    adult: boolean,
    also_known_as: string[],
    biography?: string,
    birthday: string,
    deathday?: string,
    gender: number,
    homepage?: string,
    id: number,
    imdb_id: number,
    known_for_department: string,
    name: string,
    place_of_birth?: string,
    popularity: number,
    profile_path: string
  }



export type FilterOption = "title" | "genre" | "name";