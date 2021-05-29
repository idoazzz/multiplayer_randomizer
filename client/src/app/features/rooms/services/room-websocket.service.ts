import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectableObservable , Subject, interval } from 'rxjs';
import { map, tap, multicast } from 'rxjs/operators';
import { Point } from '../components/abstract-user-avatar/abstract-avatar-component';

export interface User { 
  name: string
  color: string
  location: Point
}

export interface RoomState {
  users: User[]
}

@Injectable({
  providedIn: 'root'
})
export class RoomWebsocketService {
  // TODO: https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/
  
  public messages$: Observable<RoomState> = interval(20).pipe(
    map(time => {
        return {
          users: [
            {
              name: "ido",
              color: "#3498db",
              location: {
                x: time%300,
                y: time%300,
              }
            },
            {
              name: "almog",
              color: "#2ecc71",
              location: {
                x: 300-time%300,
                y: 300-time%300,
              }
            }
          ]
        }
      }
    ),
  );

  public connect(): void {}
  public sendMessage(message: any): void {}
  public getNewWebsocket(): any{}
  public close(): void {}
}
