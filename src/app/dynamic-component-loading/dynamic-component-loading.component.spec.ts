import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentLoadingComponent } from './dynamic-component-loading.component';

describe('DynamicComponentLoadingComponent', () => {
  let component: DynamicComponentLoadingComponent;
  let fixture: ComponentFixture<DynamicComponentLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComponentLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
