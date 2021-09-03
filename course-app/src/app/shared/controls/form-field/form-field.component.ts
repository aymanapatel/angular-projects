import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

/* Parent component for
*  1. Checkboxes
*  2. Input
*  3. Password
*  4. Select
*  5. Autocomplete
*/

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() label!:string;
  @Input() required!:boolean;
  @Input() isInline!:boolean;
  @Input() control!:AbstractControl;
  @Input() patternError!:string;

  constructor() { 
    this.isInline = true;
  }

  ngOnInit(): void {
  }

  hasError(): boolean  {

     return this.control && this.control.invalid && this.control.touched;
  }

   // Get first error as there can be many errors
   // TIL `get` Keyword: Bind an object property to function
   get errorKey() {
      const err =  this.control && this.control.errors && Object.keys(this.control.errors)[0];
      console.log(`!!! ${err}`)
      return err;
   }

}
