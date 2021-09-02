import { Component, Input, OnInit } from '@angular/core';
export type ButtonType = 'button' | 'submit'


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: ButtonType // The name of the DOM property to which the input property is bound.
  
  constructor() { 
    this.type = 'button';
  }

  ngOnInit(): void {
  }

}
