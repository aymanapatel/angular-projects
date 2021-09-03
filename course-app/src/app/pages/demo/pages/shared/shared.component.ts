import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';

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

  // Select
  items!: ControlItem[];

  constructor(private fm: FormBuilder) {
    this.isInline = true;

    this.items = [
      { label: 'Jon', value: '1'},
      { label: 'Foe', value: '2'},
      { label: 'Anik', value: '3'},
      { label: 'Qirk', value: '4'},
      { label: 'Solana', value: '5'}
    ];
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
      }],
      password: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
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
