import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomStateService } from '../../services/room-state.service';
import { User } from '../types';
@Component({
  selector: 'avatars-holder',
  templateUrl: './avatars-holder.component.html',
  styleUrls: ['./avatars-holder.component.sass']
})
export class AvatarsHolderComponent implements OnInit {
  // TODO: Tranform to User type
  localUsername : string | undefined = undefined;   
  users: User[] = [];
  remoteUsersMetadata$: Observable<User[]> = new Observable();

  constructor(private roomStateService: RoomStateService) { }

  ngOnInit(): void {
    console.log("Init avatars holder.");
    this.remoteUsersMetadata$ = this.roomStateService.remoteUsersMetadata$;
    this.localUsername = this.roomStateService.localUsername;    
  }

}
