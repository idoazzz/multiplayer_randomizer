import { OnDestroy, Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RoomStateService } from '../../services/room-state.service';
import { RoomWebsocketService } from '../../services/room-websocket.service';
import { Point } from '../types';

@Component({
  template: ''
})
export abstract class AbstractUserAvatarComponent {
  @Input() winner: boolean = false;
  @Input() color: string | undefined = undefined;
  @Input() username: string | undefined = undefined;
  
  SIDES_MARGINS: number = 75;
  width: string = "100px";
  height: string = "100px";

  top: string = "0px";
  left: string = "0px";

  styles: any = {
    "avatar": true,
  }

  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(protected roomStateService: RoomStateService, protected websocketService: RoomWebsocketService) {}
  abstract getMovementsObservable(): Observable<Point>;

  ngOnInit(): void {
    console.log(`Creating user avatar: ${this.username}`);
    this.getMovementsObservable().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(
      point => this.moveTo(point)
    );

    this.roomStateService.newWinner$.subscribe(winner => {
      if(winner === this.username){
        this.styles["winner"] = true;
      }
    });
  }

  moveTo(point: Point): void {
    if (point.x <= this.SIDES_MARGINS || point.x >= document.body.clientWidth - this.SIDES_MARGINS) {
      return;
    }
    if (point.y <= this.SIDES_MARGINS || point.y >= document.body.clientHeight - this.SIDES_MARGINS) {
      return;
    }

    this.left = `${point.x - (this.getWidth() / 2)}px`;
    this.top = `${point.y - 2 * (this.getHeight() / 2)}px`;
  }

  getHeight(): number {
    return +(this.height.slice(0, -2));
  }

  getWidth(): number {
    return +(this.width.slice(0, -2));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
