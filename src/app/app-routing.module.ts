import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DynamicComponentLoadingComponent } from './dynamic-component-loading/dynamic-component-loading.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dynamic-component-loading', component: DynamicComponentLoadingComponent },
  {path: 'dynamic-form', loadChildren: () => import('./dynamic-form/dynamic-form.module').then(r => r.DynamicFormModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
