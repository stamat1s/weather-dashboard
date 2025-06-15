import { Component } from '@angular/core';
import { WeatherService, WeatherData } from '../core/weather.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class WeatherComponent {
  cityName: string = '';             // Για το input
  weatherData: any = {};         // Αποθηκεύουμε τα δεδομένα καιρού
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (!this.cityName.trim()) {
      this.errorMessage = 'You have to enter city.';
      return;
    }

    this.errorMessage = '';

    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (err) => {
        this.errorMessage = 'City not found or network error.';
        this.weatherData = undefined;
      }
    });
  }

  getWeatherClass(): string {
  if (!this.weatherData) return '';

  const weatherMain = this.weatherData.weather[0]?.main.toLowerCase(); // π.χ. 'rain', 'clear', 'clouds'
  const icon = this.weatherData.weather[0]?.icon || '';

  // icon έχει μορφή πχ '01d' (μέρα) ή '01n' (νύχτα)
  const isDay = icon.includes('d');

  if (weatherMain.includes('rain')) {
    return isDay ? 'rainy-day' : 'rainy-night';
  } else if (weatherMain.includes('clear')) {
    return isDay ? 'sunny-day' : 'clear-night';
  } else if (weatherMain.includes('cloud')) {
    return isDay ? 'cloudy-day' : 'cloudy-night';
  }

  return isDay ? 'default-day' : 'default-night';
}

favorites: string[] = [];

ngOnInit() {
  const saved = localStorage.getItem('favorites');
  this.favorites = saved ? JSON.parse(saved) : [];
}

addFavorite(city: string) {
  if (!this.favorites.includes(city)) {
    this.favorites.push(city);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

removeFavorite(city: string) {
  this.favorites = this.favorites.filter(c => c !== city);
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
}

isFavorite(city: string): boolean {
  return this.favorites.includes(city);
}

}
