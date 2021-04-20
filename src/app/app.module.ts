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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusinessCardComponent,
    UserListComponent,
    DynamicComponentLoadingComponent,
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
