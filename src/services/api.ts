import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://db-podcastr1.herokuapp.com/'
})