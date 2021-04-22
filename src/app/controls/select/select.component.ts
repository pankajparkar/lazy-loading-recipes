import { CommonModule } from '@angular/common';
import { 
  ChangeDetectionStrategy, Component, OnInit, Self, NgModule, Input, Optional
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements OnInit, ControlValueAccessor {

 // @Input() valueAccessor: ControlValueAccessor | null;
 @Input() group: FormGroup = new FormGroup({});
 @Input() formControlName!: string;
 @Input() placeholder = 'Enter a value';
 @Input() options = [];

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
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {

}
