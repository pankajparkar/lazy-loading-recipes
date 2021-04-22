import { CommonModule } from '@angular/common';
import { 
  ChangeDetectionStrategy, Component, OnInit, Self, NgModule, Input, Optional
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from 'rxjs';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

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
    this.control = this.group.get(this.formControlName) as FormControl;
  }
}

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSliderModule, FormsModule, ReactiveFormsModule],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {

}
