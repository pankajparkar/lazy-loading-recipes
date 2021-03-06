import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DynamicIoModule } from 'ng-dynamic-component';
import { HomeComponent } from './home/home.component';
import { BusinessCardComponent } from './lazy/business-card/business-card.component';
import { UserListComponent } from './lazy/user-list/user-list.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';
import { DynamicComponentLoadingScamComponent } from './dynamic-component-loading-scam/dynamic-component-loading-scam.component';
import { DynamicSimpleFormComponent } from './dynamic-simple-form/dynamic-simple-form.component';
import { DynamicComplexFormComponent } from './dynamic-complex-form/dynamic-complex-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessCardComponent,
    UserListComponent,
    DynamicComponentLoadingComponent,
    DynamicComponentLoadingScamComponent,
    DynamicSimpleFormComponent,
    DynamicComplexFormComponent,
    DynamicFormControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    HttpClientJsonpModule,
    DynamicIoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
