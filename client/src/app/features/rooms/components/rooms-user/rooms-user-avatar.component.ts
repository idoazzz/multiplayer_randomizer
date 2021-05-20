import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-avatar',
  templateUrl: './rooms-user-avatar.component.html',
  styleUrls: ['./rooms-user-avatar.component.sass']
})
export class RoomsUserAvatarComponent implements OnInit {

  user: string = "User Fixed";

  constructor() { }

  ngOnInit(): void {
    //Start move.
  }

}
