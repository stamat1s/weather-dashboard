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
}
