import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, interval } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RoomState } from '../components/types';

@Injectable({
  providedIn: 'root'
})
export class RoomWebsocketService {
  // TODO: https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/
  
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public messages$: Observable<RoomState> = interval(20).pipe(
    map(time => {
        return {
          id: "8bf3060e6",
          winner: time > 200 ? "Ido" : "",
          users: [
            {
              name: "Yarin",
              color: "#3498db",
              location: {
                x: time%300,
                y: time%300,
              }
            },
            {
              name: "Ido",
              color: "grey",
              location: {
                x: time%300,
                y: time%300,
              }
            },
            {
              name: "Almog",
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
    takeUntil(this.destroyed$),
  );

 
  public connect(): void {}
  public sendMessage(message: any): void {}
  public getNewWebsocket(): any{}
  public close(): void {
    console.log("Closing room WS");
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
