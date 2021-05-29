import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, filter, find, map, tap } from 'rxjs/operators';
import { AbstractUserAvatarComponent, Point } from '../abstract-user-avatar/abstract-avatar-component';


@Component({
  selector: 'remote-user-avatar',
  templateUrl: './remote-user-avatar.component.html',
  styleUrls: ['./remote-user-avatar.component.sass']
})
export class RemoteUserAvatarComponent extends AbstractUserAvatarComponent {

  OUTSIDE_SCREEN_POSITION: Point = {
    x: -100,
    y: -100
  }

  getMovementsObservable(): Observable<Point> {
    return this.websocketService.messages$.pipe(
      map(message => message.users),
      concatMap(users => from(users)),
      filter(user => user.name === this.username),
      map(user => user ? user.location : this.OUTSIDE_SCREEN_POSITION),
    );
  }
}
