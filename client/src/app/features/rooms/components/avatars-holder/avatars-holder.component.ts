import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomStateService } from '../../services/room-state.service';
import { RoomWebsocketService } from '../../services/room-websocket.service';
import { User } from '../types';
@Component({
  selector: 'avatars-holder',
  templateUrl: './avatars-holder.component.html',
  styleUrls: ['./avatars-holder.component.sass']
})
export class AvatarsHolderComponent implements OnInit {
  // TODO: Tranform to User type
  localUsername : string = "";   
  users: User[] = [];
  remoteUsersMetadata$: Observable<User[]> = new Observable();
  winner: string = "";

  constructor(private roomStateService: RoomStateService) { }

  setWinner(winner: string | undefined): void{
    if(winner === undefined){
      return;
    }
    this.winner = winner;
  }

  getWinner(): string{
    return this.winner === undefined ? "" : this.winner;
  }

  ngOnInit(): void {
    console.log("Init avatars holder.");
    this.remoteUsersMetadata$ = this.roomStateService.remoteUsersMetadata$;
    this.localUsername = this.roomStateService.localUsername;    
    this.roomStateService.newWinner$.subscribe(
      winner => {
        this.setWinner(winner);
      }
    );
  }

}
