import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLazyLoadingComponent } from './dynamic-lazy-loading.component';

describe('DynamicLazyLoadingComponent', () => {
  let component: DynamicLazyLoadingComponent;
  let fixture: ComponentFixture<DynamicLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicLazyLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
