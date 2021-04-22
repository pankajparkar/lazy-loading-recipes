import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComplexFormComponent } from './dynamic-complex-form.component';

describe('DynamicComplexFormComponent', () => {
  let component: DynamicComplexFormComponent;
  let fixture: ComponentFixture<DynamicComplexFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicComplexFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComplexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
