import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';
import { DynamicComponentLoadingScamComponent } from './dynamic-component-loading-scam/dynamic-component-loading-scam.component';
import { DynamicComplexFormComponent } from './dynamic-complex-form/dynamic-complex-form.component';
import { DynamicSimpleFormComponent } from './dynamic-simple-form/dynamic-simple-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dynamic-component-loading', component: DynamicComponentLoadingComponent },
  {path: 'dynamic-component-loading-scam', component: DynamicComponentLoadingScamComponent },
  {path: 'dynamic-complex-form', component: DynamicComplexFormComponent },
  {path: 'dynamic-simple-form', component: DynamicSimpleFormComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
