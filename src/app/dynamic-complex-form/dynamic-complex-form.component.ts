import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Controls{
  type: string, 
  inputs: {
    value: any;
    formControlName: any;
    group: FormGroup,
    options?: any;
  },
}

@Component({
  selector: 'app-dynamic-complex-form',
  templateUrl: './dynamic-complex-form.component.html',
  styleUrls: ['./dynamic-complex-form.component.scss']
})
export class DynamicComplexFormComponent implements OnInit {

  feedbackForm = new FormGroup({});

  componentsMap: {[key: string]: Promise<any>|null} = {
    currency: import('./../controls/currency/currency.component').then(m => m.CurrencyComponent),
    number: import('./../controls/number/number.component').then(m => m.NumberComponent),
    select: import('./../controls/select/select.component').then(m => m.SelectComponent),
    slider: import('./../controls/slider/slider.component').then(m => m.SliderComponent),
  };

  controls: Controls[] = [
    { type: 'currency', inputs: { value: 1000, formControlName: 'price', group: this.feedbackForm }},
    { type: 'number', inputs: {formControlName: 'age', value: 100, group: this.feedbackForm} },
    { type: 'select', inputs: {options: ['Mumbai', 'Pune', 'Delhi'], formControlName: 'city', value: 'Mumbai', group: this.feedbackForm} },
    { type: 'slider', inputs: {formControlName: 'rating', value: 1, group: this.feedbackForm}  },
  ];

  constructor() { }

  createForm(controls: Controls[] = []) {
    controls.forEach(control => {
      this.feedbackForm.addControl(
        control.inputs.formControlName,
        new FormControl(control.inputs.value || '')
      );
      console.log(this.feedbackForm.get(control.inputs.formControlName));
    });
  }

  submit() {
    console.log('feedbackForm value', this.feedbackForm.value);
  }

  async ngOnInit() {
    this.createForm(this.controls);
  }

}
