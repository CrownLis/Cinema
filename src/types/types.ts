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
    filmID:number,
    nameRu:string,
    nameEn:string | null,
    year:string,
    filmLength: number | null | string,
    countries: ICountry[],
    genres:IGenre[],
    rating:string,
    ratingVoteCount:number,
    posterUrl:string,
    posterUrlPreview:string,
    ratingChange:null
}

export interface ITopFilmList {
    pagesCount:number,
    films:ITopFilm[]
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