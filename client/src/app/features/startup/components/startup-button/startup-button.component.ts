import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'startup-button',
  templateUrl: './startup-button.component.html',
  styleUrls: ['./startup-button.component.sass']
})
export class StartupButtonComponent implements OnInit {

  @Input() uri = '';
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
