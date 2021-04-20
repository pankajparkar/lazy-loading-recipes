import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wc-weather-forecast-history',
  templateUrl: './weather-forecast-history.component.html',
  styleUrls: ['./weather-forecast-history.component.css']
})
export class WeatherForecastHistoryComponent implements OnInit {
  startIndex: number = 0;
  endIndex: number = 0;

  @Input() history: any[] = [];
  @Input()
  set start(value: number) {
    this.startIndex = value;
    this.endIndex = !isNaN(value) ? value + 7 : 0;
  }
  constructor() { }

  ngOnInit() {
  }

}
