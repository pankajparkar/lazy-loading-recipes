import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRenderingComponent } from './dynamic-form-rendering.component';

describe('DynamicFormRenderingComponent', () => {
  let component: DynamicFormRenderingComponent;
  let fixture: ComponentFixture<DynamicFormRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
