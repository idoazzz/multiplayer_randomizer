import { Injectable, OnInit } from '@angular/core';
import { combineLatest, forkJoin, from, Observable } from 'rxjs';
import { combineAll, concatMap, distinctUntilChanged, filter, map, tap, share } from 'rxjs/operators';
import { User } from '../components/types';
import { RoomWebsocketService } from './room-websocket.service';


@Injectable({
  providedIn: 'root'
})
export class RoomStateService {

  public localUsername: string = "Ido";
  public remoteUsersMetadata$: Observable<User[]>;
  public remoteUsers$: Observable<User[]>;
  public newWinner$: Observable<string>;
  public roomId$: Observable<string>; 
  

  constructor(private roomWebsocketService: RoomWebsocketService) { 
    this.remoteUsersMetadata$ = this.roomWebsocketService.messages$.pipe(
      map(message => message.users),
      map(users => {
        const index = this.getUsernames(users).indexOf(this.localUsername);
        users.splice(index, 1);
        return users;
      }),
      distinctUntilChanged((prev: User[], curr: User[]) => this.compareUsers(prev, curr)),
    );

    this.remoteUsers$ = this.roomWebsocketService.messages$.pipe(
      map(message => message.users),
      distinctUntilChanged(),
    );

    this.newWinner$ = this.roomWebsocketService.messages$.pipe(
      map(message => message.winner),
      distinctUntilChanged(),
      filter(winner => winner !== undefined),
    );
    
    this.roomId$ = this.roomWebsocketService.messages$.pipe(
      map(message => message.id),
      distinctUntilChanged(),
    );
  }

  public sendRestart() {
    this.roomWebsocketService.sendMessage("restart");
  }

  public getUsernames(users: User[]) { 
    return users.map(user => user.name);
  }

  public compareUsers(a: User[], b:User[]){
    return JSON.stringify(this.getUsernames(a)) === JSON.stringify(this.getUsernames(b));
  }
}
