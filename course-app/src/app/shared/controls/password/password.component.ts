import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type PasswordType = 'password' | 'text';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]

})
export class PasswordComponent implements OnInit {

  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<string>();

  value!:string;
  isDisabled!: boolean;
  passwordType!: PasswordType;

  constructor() { 
    this.passwordType = 'text';
  }

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
  
  togglePassword() : void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
