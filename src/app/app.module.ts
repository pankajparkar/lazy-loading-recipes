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
import { DynamicFormRenderingComponent } from './dynamic-form-rendering/dynamic-form-rendering.component';
import { DynamicCompleteFormRenderingComponent } from './dynamic-complete-form-rendering/dynamic-complete-form-rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessCardComponent,
    UserListComponent,
    DynamicComponentLoadingComponent,
    DynamicComponentLoadingScamComponent,
    DynamicFormRenderingComponent,
    DynamicCompleteFormRenderingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
