import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'user-avatar',
  templateUrl: './rooms-user-avatar.component.html',
  styleUrls: ['./rooms-user-avatar.component.sass']
})
export class RoomsUserAvatarComponent implements OnInit {

  user: string = "User Fixed";
  top: string = "0px";
  left: string = "0px";

  constructor() { }

  ngOnInit(): void {
    const movements$: Observable<Event> = fromEvent(document.getElementsByTagName("body"), "mousemove")
    movements$.subscribe(
      event=>{
        this.left = `${(event as MouseEvent).clientX}px`;
        this.top = `${(event as MouseEvent).clientY}px`;
      }
    )
  }

}
