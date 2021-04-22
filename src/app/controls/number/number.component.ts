import { CommonModule } from '@angular/common';
import { 
  ChangeDetectionStrategy, Component, OnInit, Self, NgModule, Input, Optional
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberComponent implements OnInit, ControlValueAccessor {

  // @Input() valueAccessor: ControlValueAccessor | null;
  @Input() group: FormGroup = new FormGroup({});
  @Input() formControlName!: string;
  @Input() placeholder = 'Enter a value';

  control!: FormControl;

  subscriptions: Subscription[] = [];

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
    this.control = this.formControlName ?this.group.get(this.formControlName) as FormControl: new FormControl();;
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [NumberComponent],
  exports: [NumberComponent]
})
export class NumberModule {

}
