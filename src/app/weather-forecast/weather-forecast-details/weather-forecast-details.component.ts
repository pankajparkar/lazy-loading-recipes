import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast-details',
  templateUrl: './weather-forecast-details.component.html',
  styleUrls: ['./weather-forecast-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastDetailsComponent implements OnInit {
  @Input() cast: any;
  constructor() { }

  ngOnInit() {
  }

}
