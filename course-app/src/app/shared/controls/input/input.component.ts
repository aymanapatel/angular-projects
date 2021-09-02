import { Component, forwardRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Event } from '@angular/router';

// https://angular.io/api/forms/ControlValueAccessor

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {



  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<string>();

  /**
   * From TS 2.7.2; Compiler gives strict warning for non-declared error.
   * Hence; `let value:string;` gives  TS2564: Property 'value' has no initializer and is not definitely assigned in the constructor.
   * Need to use `!` operator. i.e. `let value!: string` 
   * It's called the "Non-null assertion operator" 
   * and it tells the compiler that x.getY() is not null.
   * Keep in mind this CAN be a bad practice (Not sure)
   */

  value!: string;
  isDisabled!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  

  private propogateChange: any = () => { };
  private propogateTouched: any = () => { };

  // Gets value from external component and passes to form
  writeValue(value: string): void {
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

  onKeyup(event: any): void {
    this.value = event.target.value;
    this.propogateChange(event.target.value); 
    this.changed.emit(event.target.value);
  }


  onBlur(): void {
    this.propogateTouched();
  }

}
