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

export interface IFilmList {
    total: number,
    totalPages: number,
    list: IFilm[]
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
    id: number
    genre: string
}

export interface ICountries {
    id: number
    country: string
}

export interface ICategoriesList {
    genres: IGenre[]
    countries: ICountries[]
}