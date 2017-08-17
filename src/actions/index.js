import axios from 'axios'
const API_KEY = 'b0da1b6758564dc76662c0b7ba8d6c50';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    //console.log('request:', request);
    return {
        type:FETCH_WEATHER,
        payload: request
    }
}