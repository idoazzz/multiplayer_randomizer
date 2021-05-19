import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'startup-menu',
  templateUrl: './startup-menu.component.html',
  styleUrls: ['./startup-menu.component.sass']
})
export class StartupMenuComponent implements OnInit {

  buttons = [
    {
      text: "Start",
      uri: "/room",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
