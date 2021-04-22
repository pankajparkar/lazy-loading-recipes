import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-loading-scam',
  templateUrl: './dynamic-component-loading-scam.component.html',
  styleUrls: ['./dynamic-component-loading-scam.component.scss']
})
export class DynamicComponentLoadingScamComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: any;

  constructor(
    private factoryResolver: ComponentFactoryResolver
  ) { }

  async loadWeatherWidget() {
    this.clear();
    const weatherComponent = await import('../weather-forecast/weather-dashboard/weather-dashboard.component').then(i => i.WeatherDashboardComponent);
    const weatherForecastWidget = this.factoryResolver.resolveComponentFactory(weatherComponent);
    const componentRef = this.container.createComponent(weatherForecastWidget);
    componentRef.instance.headingStart = 'Just for fun';
  }

  clear() {
    this.container.clear();
  }

  ngOnInit(): void {
  }

}
