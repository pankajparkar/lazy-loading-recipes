import { CommonModule } from '@angular/common';
import { 
  ChangeDetectionStrategy, Component, OnInit, Self, NgModule, Input, Optional
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent implements OnInit, ControlValueAccessor {

  @Input() component!: any;
  @Input() placeholder = 'Enter a value';

  subscriptions: Subscription[] = [];
  options = [];

  constructor(
    @Self() @Optional() public ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  //ControlValueAccessor interface
  writeValue(_: any) {  }

  registerOnChange(_: any) { }

  registerOnTouched(_: any) { }

  setDisabledState?(_: boolean) { }

  ngOnInit(): void {
  }
}


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [CurrencyComponent],
  exports: [CurrencyComponent]
})
export class CurrencyModule {

}
