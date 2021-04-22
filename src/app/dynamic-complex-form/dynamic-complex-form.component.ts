import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-complex-form',
  templateUrl: './dynamic-complex-form.component.html',
  styleUrls: ['./dynamic-complex-form.component.scss']
})
export class DynamicComplexFormComponent implements OnInit {

  controls: {component?: Promise<any>|null, value: any, inputs?: any}[] = [];

  constructor() { }

  async ngOnInit() {
    this.controls = [
      { component: import('./../controls/currency/currency.component').then(m => m.CurrencyComponent), value: 1 },
      { component: import('./../controls/number/number.component').then(m => m.NumberComponent), value: 1  },
      { component: import('./../controls/select/select.component').then(m => m.SelectComponent), value: 1, inputs: {options: ['Mumbai'] }},
      { component: import('./../controls/slider/slider.component').then(m => m.SliderComponent), value: 1  },
    ];
  }

}
