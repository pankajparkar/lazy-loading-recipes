import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LocationService } from '../services/location.service';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AppModule } from '../app.module';
import { weatherData } from '../../test/mock-data'
import { BrowserModule, By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionPanel } from '@angular/material';
import { WeatherForecastCityComponent } from '../weather-forecast-city/weather-forecast-city.component';

describe('Weather Forecast City Component', () => {
  let component: WeatherForecastCityComponent;
  let fixture: ComponentFixture<WeatherForecastCityComponent>;
  let locationService: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, NoopAnimationsModule],
      declarations: [WeatherForecastCityComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastCityComponent);
    component = fixture.componentInstance;
    let cast = Object.assign({}, weatherData).list[0];
    // cast.weather = undefined;
    component.cast = cast;
  });


  describe('should display accurate output text displayed', () => {
    it('should have temperature', () => {
      fixture.detectChanges();
      var temp = fixture.debugElement.query(By.css('.temp-current'));
      expect(Number(temp.nativeElement.innerText)).toBe(component.cast.main.temp);
    });
    it('should have main temperature status', () => {
      fixture.detectChanges();
      var tempStatus = fixture.debugElement.query(By.css('.temp-status'));
      var weatherPresent = tempStatus.nativeElement.innerText.indexOf(component.cast.weather[0].main);
      expect(weatherPresent).toBeGreaterThan(-1);
    });
  });
});
