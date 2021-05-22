import { Component } from '@angular/core';
import { fromEvent, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Point, AbstractUserAvatarComponent } from './abstract-avatar-component'


@Component({
  selector: 'user-avatar',
  templateUrl: './rooms-user-avatar.component.html',
  styleUrls: ['./rooms-user-avatar.component.sass']
})
export class RoomsUserAvatarComponent extends AbstractUserAvatarComponent {
  getMovementObservable(): Observable<Point> {
    return fromEvent(
      document.getElementsByTagName("body"), "mousemove"
    ).pipe(map(
      (e: Event) => {
          const newEvent: MouseEvent = (e as MouseEvent);
          return {
            x: newEvent.clientX, 
            y: newEvent.clientY
          };
      }
    ));
  }
}
