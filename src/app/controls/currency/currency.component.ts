import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyComponent],
  exports: [CurrencyComponent]
})
export class CurrencyModule {

}
