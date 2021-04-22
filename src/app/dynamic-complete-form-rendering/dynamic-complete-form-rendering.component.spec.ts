import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompleteFormRenderingComponent } from './dynamic-complete-form-rendering.component';

describe('DynamicCompleteFormRenderingComponent', () => {
  let component: DynamicCompleteFormRenderingComponent;
  let fixture: ComponentFixture<DynamicCompleteFormRenderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCompleteFormRenderingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompleteFormRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
