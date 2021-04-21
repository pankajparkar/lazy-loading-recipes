import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() profile!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
