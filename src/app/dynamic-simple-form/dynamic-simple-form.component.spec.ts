import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSimpleFormComponent } from './dynamic-simple-form.component';

describe('DynamicSimpleFormComponent', () => {
  let component: DynamicSimpleFormComponent;
  let fixture: ComponentFixture<DynamicSimpleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSimpleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
