import { Component,OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private weatherService: WeatherService) {

  }

  cityName: string = 'Wellington';
  WeatherData?: WeatherData;

  ngOnInit(): void {
  
  this.weatherService.getWeatherData(this.cityName)
  .subscribe({
      next: (response: any) => {
      this.WeatherData = response;
      console.log(response);
      }
  });

  }

  onSubmit() {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
  .subscribe({
      next: (response: any) => {
      this.WeatherData = response;
      console.log(response);
      }
  });
  }
}
