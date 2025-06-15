import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherData {
  name: string;           // Όνομα πόλης
  weather: {              // Πληροφορίες καιρού (π.χ. βροχή, ήλιος)
    main: string;
    description: string;
  }[];
  main: {
    temp: number;         // Θερμοκρασία σε Celsius
    humidity: number;     // Υγρασία
  };
  sys: {
    sunrise: number;      // Ώρα ανατολής (timestamp)
    sunset: number;       // Ώρα δύσης (timestamp)
  };
  dt: number;             // Τρέχον timestamp
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '';  // Βάλε εδώ την δική σου API key

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')   // θερμοκρασία σε Celsius
      .set('lang', 'el');       // ελληνικά

    return this.http.get<WeatherData>(this.baseUrl, { params });
  }
}
