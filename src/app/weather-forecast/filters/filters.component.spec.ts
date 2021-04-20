// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild, Component, ViewContainerRef, Directive } from '@angular/core';
// import { MatDialogRef } from '@angular/material';
// import { BrowserModule } from '@angular/platform-browser';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';

// import { LocationService } from '../services/location.service';
// import { WeatherService } from '../services/weather.service';
// import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
// import { CustomMaterialModule } from '../custom-material/custom-material.module';
// import { AppModule } from '../app.module';
// import { countries, states, cities, ipData } from '../../test/mock-data'

// import { FiltersComponent } from './filters.component';
// import { DropdownService } from '../services/dropdown.service';

// @Directive({selector: 'dir-with-view-container'})
// class DirectiveWithViewContainer {
//   constructor(public viewContainerRef: ViewContainerRef) { }
// }

// @Component({
//   selector: 'arbitrary-component',
//   template: `<dir-with-view-container></dir-with-view-container>`,
// })
// class ComponentWithChildViewContainer {
//   @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;

//   get childViewContainer() {
//     return this.childWithViewContainer.viewContainerRef;
//   }
// }

// @Component({
//   selector: 'arbitrary-component-with-template-ref',
//   template: `<ng-template let-data let-dialogRef="dialogRef">
//       Cheese {{localValue}} {{data?.value}}{{setDialogRef(dialogRef)}}</ng-template>`,
// })
// class ComponentWithTemplateRef {
//   localValue: string;
//   dialogRef: MatDialogRef<any>;

//   @ViewChild(TemplateRef) templateRef: TemplateRef<any>;

//   setDialogRef(dialogRef: MatDialogRef<any>): string {
//     this.dialogRef = dialogRef;
//     return '';
//   }
// }

// describe('DashboardComponent', () => {
//   let component: FiltersComponent,
//     fixture: ComponentFixture<FiltersComponent>,
//     locationService: LocationService,
//     dialogRef: MatDialogRef<FiltersComponent>,
//     dropdownService: DropdownService;

//   beforeEach(() => {

    
//     let stubLocationService = {
//       getIPData: () => Observable.of(ipData),
//       ipData: ipData,
//       ipData$: new BehaviorSubject<any>(ipData)
//     }, stubDropdownService = {
//       getCities: () => Observable.of(cities),
//       getCountries: () => Observable.of(countries),
//       getRegions: () => Observable.of(states)
//     };

//     TestBed.configureTestingModule({
//       imports: [AppModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         { provide: LocationService, useValue: stubLocationService },
//         { provide: DropdownService, useValue: stubDropdownService },
//       ]
//     });

//     fixture = TestBed.createComponent(FiltersComponent);
//     // fixture.debugElement
//     let matDialogRef = fixture.debugElement.injector.get(MatDialogRef);
//     matDialogRef
//     component = fixture.componentInstance;
//   });


//   describe('Default values', () => {
//     it('location should have loaded with city, state and country', () => {
//       //after component loaded
//       fixture.detectChanges();
//       expect(component.locationData).toBeDefined();
//     });

//     it('should open first accordion', () => {
//       fixture.detectChanges();
//       expect(component.locationData).toBeDefined();
//     });
//   });
// });
