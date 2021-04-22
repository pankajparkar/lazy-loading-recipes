import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-simple-form',
  templateUrl: './dynamic-simple-form.component.html',
  styleUrls: ['./dynamic-simple-form.component.scss']
})
export class DynamicSimpleFormComponent implements OnInit {

  controls: {component?: Promise<any>|null}[] = [
    { component: import('./../controls/currency/currency.component').then(c => c.CurrencyComponent) },
    { component: import('./../controls/number/number.component').then(c => c.NumberComponent)  },
    { component: import('./../controls/select/select.component').then(c => c.SelectComponent)  },
    { component: import('./../controls/slider/slider.component').then(c => c.SliderComponent)  },
  ]

  constructor() { }

  submit() {
    console.log('Called');
  }

  ngOnInit(): void {
  }

}
