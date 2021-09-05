import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend';

import { regex, regexErrors, markFormGroupTouched } from "@app/shared/utils"

import { NotificationService } from "@app/services";

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

  showSpinner = false;

  constructor(private fm: FormBuilder, private notification: NotificationService) {
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
      autocomplete: [null, {
        updateOn: 'change',
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
      checkboxes: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change',
        validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }],
    dateRange: [null, {
      updateOn: 'change', validators: [
          Validators.required
      ]
      }],
    })
  }

  onSubmit():void {
    console.log('Submit');

    if(!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }
  onPatchValue() {
    this.form.patchValue({
      input: 'test@test.com',
      password: 'password',
      autocomplete: 1, // label: 1
      select: 2, // label: 2
      checkboxes: [3], // label: 3
      radios: 4, // label: 4
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 20).getTime(),
      }
    })
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

  onToggleDisable(): void {
    if(this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

  onSuccess(): void {
    this.notification.success('Everything is fine!');
  }

  onError(): void {
    this.notification.error('OOps! Something went wrong');

  }

}
