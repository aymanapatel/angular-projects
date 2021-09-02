import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form!: FormGroup;

  constructor(private fm: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fm.group({
      input: [null]
    })
  }

  onSubmit():void {
    console.log('Submit')
  }
  onPatchValue() {
    this.form.patchValue({input: 'test'})
  }

}
