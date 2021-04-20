import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [CommonModule],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {

}
