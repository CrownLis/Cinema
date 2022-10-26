import axios from 'axios';

const CinemaAPI = axios.create({
  baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
  headers: {
    'X-API-KEY': '9fb4d3cc-3af8-4291-8121-917c60a7f9d7',
    'Content-Type': 'application/json',
  },
}
);



export const fetchPremiers = async (year: number, month: string) => {
  return await CinemaAPI.get(`/premieres?year=${year}&month=${month}`)
}

export const fetchCategories = async () => {
  return await CinemaAPI.get('/filters')
}

export const fetchTopFilms = async (type?: string, page?: number) => {
  return await CinemaAPI.get(`/top`, {
    params:
    {
      type,
      page
    }
  })
}

export const fetchFilteredList = async (
  countries?: number,
  genres?: number,
  order?: string,
  type?: string,
  ratingFrom?: number,
  ratingTo?: any,
  yearFrom?: any,
  yearTo?: any,
  page?: number) => {
  return await CinemaAPI.get('/', {
    params: {
      countries,
      genres,
      order,
      type,
      ratingFrom,
      ratingTo,
      yearFrom,
      yearTo,
      page
    }
  })
}