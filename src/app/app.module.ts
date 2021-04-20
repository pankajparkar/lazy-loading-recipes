import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DynamicIoModule } from 'ng-dynamic-component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
