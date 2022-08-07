import axios from 'axios';
import { Movie } from '../types/types';

const API_KEY = "97034e5b5f26cf232f706d6a03eed704";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export function getPopularMovies() {
    return api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
}

export function getRecentlyAdded() {
    return api.get(`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
}

export function getTopRated() {
    return api.get(`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
}

export function getHorrorMovies() {
    return api.get(`search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`);
}