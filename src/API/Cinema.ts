import axios from 'axios';

const CinemaAPI = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
  });

const config = {
    headers: {
        'X-API-KEY': '9fb4d3cc-3af8-4291-8121-917c60a7f9d7',
        'Content-Type': 'application/json',
    },
}


export const fetchPremiers = async (year: number, month: string) => {
  return await CinemaAPI.get(`/premieres?year=${year}&month=${month}`,config)
}

export const fetchCategories = async () => {
  return await CinemaAPI.get('/filters',config)
}