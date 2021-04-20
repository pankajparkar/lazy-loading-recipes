import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent implements OnInit {

  @Input() headingStart = 'Weather in';
  @Input() weather: any;
  @Input() date: any;

  constructor() { }

  ngOnInit() {
  }

}
