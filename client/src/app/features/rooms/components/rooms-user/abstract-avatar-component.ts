import { OnInit, OnDestroy, Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface Point {
  x: number
  y: number
}

@Component({
  template: ''
})
export abstract class AbstractUserAvatarComponent implements OnDestroy {

  SIDES_MARGINS: number = 75;

  @Input() user: string = "User Fixed";
  top: string = "0px";
  left: string = "0px";
  width: string = "100px";
  height: string = "100px";
  movements$: Observable<Point>;
  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor() { 
        this.movements$ = this.getMovementObservable();
        this.movements$.pipe(takeUntil(this.destroyed$)).subscribe(
          point => this.moveTo(point)
        );
    }

  abstract getMovementObservable(): Observable<Point>;

  moveTo(point: Point): void {
    if(point.x <= this.SIDES_MARGINS || point.x >= document.body.clientWidth - this.SIDES_MARGINS){
      return;
    }
    if(point.y <= this.SIDES_MARGINS || point.y >= document.body.clientHeight - this.SIDES_MARGINS){
      return;
    }
    
    this.left = `${point.x - (this.getWidth() / 2)}px`;
    this.top = `${point.y- (this.getHeight() / 2)}px`;
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
