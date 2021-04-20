import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AppModule } from '../app.module';
import { ipData, weatherData, formatDate } from '../../test/mock-data'
import { BrowserModule, By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionPanel } from '@angular/material';

describe('Weather Forecast Component', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let weatherService: WeatherService;
  let locationService: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, NoopAnimationsModule],
      declarations: [WeatherForecastComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    component.date = new Date();
    component.weather = weatherData;
  });


  describe('should show accurate output text displayed', () => {
    it('should have city', () => {
      fixture.detectChanges();
      var index = fixture.debugElement.nativeElement.innerText.indexOf(weatherData.city.name);
      expect(index).toBeGreaterThan(-1);
    });
    it('should have date', () => {
      fixture.detectChanges();
      let reformattedDate = formatDate(component.date);
      var index = fixture.debugElement.nativeElement.innerText.indexOf(reformattedDate);
      expect(index).toBeGreaterThan(-1);
    });
  });
});
