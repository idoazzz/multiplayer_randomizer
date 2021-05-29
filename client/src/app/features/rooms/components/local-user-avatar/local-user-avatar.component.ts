import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { fromEvent, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractUserAvatarComponent, Point } from '../abstract-user-avatar/abstract-avatar-component';


@Component({
  selector: 'local-user-avatar',
  templateUrl: './local-user-avatar.component.html',
  styleUrls: ['./local-user-avatar.component.sass']
})
export class LocalUserAvatarComponent extends AbstractUserAvatarComponent {
  getMovementsObservable(): Observable<Point> {
    return fromEvent(
      document.getElementsByTagName("body"), "mousemove"
    ).pipe(
      map((e: Event) => {
          const newEvent: MouseEvent = (e as MouseEvent);
          const currentLocation = {
            x: newEvent.clientX, 
            y: newEvent.clientY,
          };
          this.websocketService.sendMessage(currentLocation);
          return currentLocation;
      }
    ));
  }

}