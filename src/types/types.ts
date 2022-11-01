export interface IPremierList {
    total: number,
    items: IPremier[]
}

export interface IFilm {
    kinopoiskId: number,
    imdbId?: string,
    nameRu?: string,
    NameEn?: string | null,
    nameOriginal?: string,
    countries?: [
        { country: string }
    ],
    genres: [{
        genre: string
    }],
    ratingKinopoisk?: number,
    ratingImdb?: number,
    year?: number,
    type?: string,
    posterUrl?: string,
    posterUrlPreview?: string
}

export interface ITopFilm {
    filmId: number,
    nameRu: string,
    nameEn: string | null,
    year: string,
    filmLength: number | null | string,
    countries: ICountry[],
    genres: IGenre[],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    ratingChange: null
}

export interface ITopFilmList {
    pagesCount: number,
    films: ITopFilm[]
}

export interface IFilmList {
    total: number,
    totalPages: number,
    items: IFilm[]
}

export interface IPremier {
    kinopoiskId: number,
    nameRu: string,
    nameEn: string,
    year: number,
    posterUrl: string,
    posterUrlPreview: string,
    countries: [
        {
            country: string
        }
    ],
    genres: [
        {
            genre: string
        }
    ],
    duration: number,
    premiereRu: string
}

export interface IGenre {
    genre: string
    id?: number
}

export interface ICountry {
    country: string
    id?: number
}

export interface ICategoriesList {
    genres: IGenre[]
    countries: ICountry[]
}

export interface IFilmInfo {
    kinopoiskId: number,
    imdbId: string,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    logoUrl: string,
    reviewsCount: number,
    ratingGoodReview: number,
    ratingGoodReviewVoteCount: number,
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    ratingImdb: number,
    ratingImdbVoteCount: number,
    ratingFilmCritics: number,
    ratingFilmCriticsVoteCount: number,
    ratingAwait: number,
    ratingAwaitCount: number,
    ratingRfCritics: number,
    ratingRfCriticsVoteCount: number,
    webUrl: string
    year: number,
    filmLength: number,
    slogan: string,
    description: string,
    shortDescription: string,
    editorAnnotation: string,
    isTicketsAvailable: boolean,
    productionStatus: string,
    type: string,
    ratingMpaa: string,
    ratingAgeLimits: string,
    hasImax: boolean,
    has3D: boolean,
    lastSync: string,
    countries: ICountry[],
    genres: IGenre[],
    startYear: number,
    endYear: number,
    serial: boolean,
    shortFilm: boolean,
    completed: boolean
}

export interface IEpisode {
    seasonNumber: number,
    episodeNumber: number,
    nameRu: string,
    nameEn: string,
    synopsis: string,
    releaseDate: Date
}

export interface ISeasons {
    total: 5,
    items: [
        {
            number: 1,
            episodes: IEpisode[]
        }
    ]
}

export interface IVideo {
    url: string,
    name: string,
    site: string
}
export interface IVideos {
    total: number,
    items: IVideo[]
  }

  export interface IFilmData {
    info:IFilmInfo,
    trailers:IVideos,
    seasons:ISeasons
  }