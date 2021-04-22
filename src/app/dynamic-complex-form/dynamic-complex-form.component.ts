import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Controls{
  component?: Promise<any>|null, 
  inputs: {
    value: any;
    formControlName: any;
    group: FormGroup
  },
}

@Component({
  selector: 'app-dynamic-complex-form',
  templateUrl: './dynamic-complex-form.component.html',
  styleUrls: ['./dynamic-complex-form.component.scss']
})
export class DynamicComplexFormComponent implements OnInit {

  feedbackForm = new FormGroup({});

  controls: Controls[] = [
    { component: import('./../controls/currency/currency.component').then(m => m.CurrencyComponent),
        inputs: {
          value: 1,
          formControlName: 'price',
          group: this.feedbackForm
          // get valueAccessor() { debugger;
          //   return this.feedbackForm.get('price')
          // } 
        }
    },
    // { component: import('./../controls/number/number.component').then(m => m.NumberComponent), value: 1, inputs: {formControlName: 'age'}  },
    // { component: import('./../controls/select/select.component').then(m => m.SelectComponent), value: 1, inputs: {options: ['Mumbai'], formControlName: 'city'} },
    // { component: import('./../controls/slider/slider.component').then(m => m.SliderComponent), value: 1, inputs: {formControlName: 'rating'}  },
  ];

  constructor() { }

  createForm(controls: Controls[] = []) {
    controls.forEach(control => {
      this.feedbackForm.addControl(control.inputs.formControlName, new FormControl())
      console.log(this.feedbackForm.get(control.inputs.formControlName));
    });
  }

  async ngOnInit() {
    this.createForm(this.controls);
  }

}
