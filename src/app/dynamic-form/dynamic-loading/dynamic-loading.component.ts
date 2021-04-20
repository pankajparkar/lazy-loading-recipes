import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss']
})
export class DynamicLoadingComponent implements OnInit {

  controls: {component?: Promise<any>|null}[] = [
    { component: import('./../../controls/currency/currency.component').then(c => c.CurrencyComponent) },
    { component: import('./../../controls/number/number.component').then(c => c.NumberComponent)  },
    { component: import('./../../controls/select/select.component').then(c => c.SelectComponent)  },
    { component: import('./../../controls/slider/slider.component').then(c => c.SliderComponent)  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
