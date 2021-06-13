import { Component, OnInit } from '@angular/core';
import { RoomStateService } from 'src/app/features/rooms/services/room-state.service';
@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.sass']
})
export class RoomPageComponent implements OnInit {

  roomId: string | undefined = undefined;

  constructor(private roomStateService: RoomStateService) {}

  ngOnInit(): void {
    this.roomStateService.roomId$.subscribe(id => this.roomId = id);
  }

  sendRestart(): void {
    this.roomStateService.sendRestart();
  }
}
