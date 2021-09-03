import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';

import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { ControlItem, Value } from "@app/models/frontend";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit {

  @Input() items!: ControlItem[]; // Dropdown List Items

  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<Value>(); // Custom type Value instead of string

  value!: Value;
  isDisabled!:boolean; 

  constructor() { }

  ngOnInit(): void {
  }

  private propogateChange: any = () => { };
  private propogateTouched: any = () => { };

  // Gets value from external component and passes to form
  writeValue(value: string): void {
    console.log(`@Input@ ${value}`);
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

  onChanged(event: MatSelectChange): void {

    const value = event.value ? event.value : null;

    this.value = value;
    this.propogateChange(value); 
    this.changed.emit(value);
  }


  onBlur(): void {
    this.propogateTouched();
  }

}
