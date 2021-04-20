import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';

export interface DynamicComponent {

}

@Component({
  selector: 'wc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, DynamicComponent {

  @Input() headingStart = 'Weather Forecast in';

  weatherCast: any;
  locationData: any;
  date: Date = new Date();
  selected = 0;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) { }


  getWeatherData(ipData: any) {
    this.weatherService.getWeatherData('MUMBAI', 'IN').subscribe(
      weatherCast => {
        this.weatherCast = weatherCast
      }
    );
  }
  selectAccordion(index: number){
    this.selected = index;
  }

  ngOnInit() {
    this.getWeatherData(this.locationData);
  }

  ngOnDestroy() {
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { WeatherForecastDetailsComponent } from '../weather-forecast-details/weather-forecast-details.component';
import { WeatherForecastCityComponent } from '../weather-forecast-city/weather-forecast-city.component';
import { WeatherForecastHistoryComponent } from '../weather-forecast-history/weather-forecast-history.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from '../filters/filters.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FiltersComponent,
    WeatherForecastComponent,
    WeatherForecastDetailsComponent,
    WeatherForecastCityComponent,
    WeatherForecastHistoryComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardComponent]
})
export class WeatherForecastModule { }
