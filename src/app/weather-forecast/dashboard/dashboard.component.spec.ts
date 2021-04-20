import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChildren, QueryList } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AppModule } from '../app.module';
import { ipData, weatherData } from '../../test/mock-data'
import { BrowserModule, By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionPanel } from '@angular/material';

describe('Dashboard Component', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let weatherService: WeatherService;
  let locationService: LocationService;

  beforeEach(() => {
    let ipData$ = new BehaviorSubject<any>(ipData);
    let stubLocationService = {
      getIPData: () => of(ipData),
      ipData: ipData,
      ipData$: ipData$,
      ipDataGetter: () => ipData$.asObservable()
    }, stubWeatherService = {
      getWeatherData: () => of(weatherData)
    };

    TestBed.configureTestingModule({
      imports: [CustomMaterialModule, NoopAnimationsModule],
      declarations: [DashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: LocationService, useValue: stubLocationService },
        { provide: WeatherService, useValue: stubWeatherService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);

    component = fixture.componentInstance;
  });


  describe('Default values', () => {
    it('location should have loaded with city, state and country', () => {
      //after component loaded
      fixture.detectChanges();
      expect(component.locationData).toBeDefined();
      expect(component.locationData.city).toBeDefined();
      expect(component.locationData.region_code).toBeDefined();
      expect(component.locationData.country_code).toBeDefined();
      expect(component.weatherCast).toBeDefined();
    });

    it('should open first accordion', () => {
      fixture.detectChanges();
      expect(component.selected).toBe(0);
    });
  });

  it('Should load single panel', () => {
    fixture.detectChanges();
    let el = fixture.nativeElement;
    const accordion = el.querySelectorAll('mat-accordion');
    expect(accordion.length).toBe(1);
  });

  it('Should have loaded all accordion on page', () => {
    fixture.detectChanges();
    let el = fixture.nativeElement;
    const expansionPanel = el.querySelectorAll('mat-expansion-panel');
    expect(expansionPanel.length).toBe(5);
  });

  describe("Should change the index of panel if different panel", function(){
    it('3rd accordion selected', () => {
      let el = fixture.nativeElement;
      
      fixture.detectChanges();
      const expansionPanel = fixture.debugElement.queryAll(By.css('mat-expansion-panel'));
      expansionPanel[2].componentInstance.opened.emit();
  
      fixture.detectChanges();
      expect(component.selected).toBe(2*8);
    });
  
    it('5rd accordion selected', () => {
      let el = fixture.nativeElement;
      
      fixture.detectChanges();
      const expansionPanel = fixture.debugElement.queryAll(By.css('mat-expansion-panel'));
      expansionPanel[4].componentInstance.opened.emit();
  
      fixture.detectChanges();
      expect(component.selected).toBe(4*8);
    });
  });


});
