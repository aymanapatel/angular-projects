import { Component, forwardRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '@app/models/frontend';


@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value>();

  /**
   * From TS 2.7.2; Compiler gives strict warning for non-declared error.
   * Hence; `let value:string;` gives  TS2564: Property 'value' has no initializer and is not definitely assigned in the constructor.
   * Need to use `!` operator. i.e. `let value!: string` 
   * It's called the "Non-null assertion operator" 
   * and it tells the compiler that x.getY() is not null.
   * Keep in mind this CAN be a bad practice (Not sure)
   */

  value!: Value;
  isDisabled!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propogateChange: any = () => { };
  private propogateTouched: any = () => { };

  // Gets value from external component and passes to form
  writeValue(value: Value): void {
    this.value = value;
  }  

  // OnChange Events
  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }  

  // OnTouch Events
  registerOnTouched(fn: any): void {
    this.propogateTouched = fn;
  }  

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }  

  onChanged(value: Value): void {

    this.value = value;
    this.propogateChange(value);
    this.changed.emit(value);
  }



  isChecked(value: Value): boolean {
    return this.value === value;
  }

}
