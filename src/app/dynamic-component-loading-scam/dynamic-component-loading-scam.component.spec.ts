import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentLoadingScamComponent } from './dynamic-component-loading-scam.component';

describe('DynamicComponentLoadingScamComponent', () => {
  let component: DynamicComponentLoadingScamComponent;
  let fixture: ComponentFixture<DynamicComponentLoadingScamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComponentLoadingScamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentLoadingScamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
