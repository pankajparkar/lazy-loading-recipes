import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const FORECAST_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast';
const OPEN_WEATHER_API_KEY = '7ec24178bacbeb8537ee4d6dbe6724db';
const FORECAST_API_URL = `${FORECAST_API_ENDPOINT}?appid=${OPEN_WEATHER_API_KEY}`;


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(city: string, countryCode: string) {
    return this.httpClient.get(FORECAST_API_URL, {
        params: { q: `${city},${countryCode}`, units: 'metric' }
      }
    );
  }

}
