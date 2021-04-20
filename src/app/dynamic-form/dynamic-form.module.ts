import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicLoadingComponent } from './dynamic-loading/dynamic-loading.component';
import { DynamicLazyLoadingComponent } from './dynamic-lazy-loading/dynamic-lazy-loading.component';
import { RouterModule } from '@angular/router';
import { DynamicModule } from 'ng-dynamic-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes = [
  { path: 'dynamic-loading', component: DynamicLoadingComponent},
  { path: 'dynamic-lazy-loading', component: DynamicLazyLoadingComponent},
  { path: '', redirectTo: 'dynamic-loading'},
]

@NgModule({
  declarations: [DynamicFormComponent, DynamicLoadingComponent, DynamicLazyLoadingComponent],
  imports: [
    CommonModule,
    DynamicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicFormModule { }
