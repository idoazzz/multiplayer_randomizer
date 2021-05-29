import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomWebsocketService, User } from '../../services/room-websocket.service';
import { distinctUntilChanged, map, skipWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'avatars-holder',
  templateUrl: './avatars-holder.component.html',
  styleUrls: ['./avatars-holder.component.sass']
})
export class AvatarsHolderComponent implements OnInit {
  // TODO: Tranform to User type
  users: User[] = [];

  constructor(private websocketService: RoomWebsocketService) { }

  ngOnInit(): void {
     this.websocketService.messages$.pipe(
      map(message => message.users),
      distinctUntilChanged((prev: User[], curr: User[]) => this.compareUsers(prev, curr)),
    ).subscribe(users => {
        if(!this.compareUsers(this.users, users)){
          this.users = users;
          console.dir(`New users: ${JSON.stringify(this.getUsernames(this.users))}`);
        }
    });
  }

  // TODO: Move to another place.
  private getUsernames(users: User[]) { 
    return users.map(user => user.name);
  }

  private compareUsers(a: User[], b:User[]){
    return JSON.stringify(this.getUsernames(a)) === JSON.stringify(this.getUsernames(b));
  }
}
