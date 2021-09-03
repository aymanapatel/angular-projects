import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { regex, regexErrors } from "@app/shared/utils"

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;

  constructor(private fm: FormBuilder) {
    this.isInline = true;
   }

  ngOnInit(): void {

    this.form = this.fm.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email)
        ]
      }]
    })
  }

  onSubmit():void {
    console.log('Submit')
  }
  onPatchValue() {
    this.form.patchValue({input: 'test'})
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

}
