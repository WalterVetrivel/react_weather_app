import axios from 'axios';
import {LOCATION_URL} from './location';
import {WEATHER_URL} from './weather';

export const locationInstance = axios.create({
	baseURL: LOCATION_URL
});

export const weatherInstance = axios.create({
	baseURL: WEATHER_URL
});
