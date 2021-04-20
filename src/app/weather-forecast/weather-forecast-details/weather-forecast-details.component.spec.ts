import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LocationService } from '../services/location.service';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { weatherData } from '../../test/mock-data'
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherForecastDetailsComponent } from './weather-forecast-details.component';

describe('Weather Forecast Details Component', () => {
  let component: WeatherForecastDetailsComponent;
  let fixture: ComponentFixture<WeatherForecastDetailsComponent>;
  let locationService: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, NoopAnimationsModule],
      declarations: [WeatherForecastDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastDetailsComponent);
    component = fixture.componentInstance;
    component.cast = weatherData.list[0];
  });


  describe('should display accurate output text displayed', () => {
    it('should have temperature', () => {
      let minTemp = fixture.debugElement.queryAll(By.css('.temp'));
      fixture.detectChanges();
      expect(minTemp[0].nativeElement.innerText).toBe(component.cast.main.temp_min.toFixed(2));
    });
    it('should have main temperature status', () => {
      let maxTemp = fixture.debugElement.queryAll(By.css('.temp'));
      fixture.detectChanges();
      expect(maxTemp[1].nativeElement.innerText).toBe(component.cast.main.temp_max.toFixed(2));
    });
  });
});