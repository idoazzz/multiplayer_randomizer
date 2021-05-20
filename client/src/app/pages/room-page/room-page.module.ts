import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomPageComponent } from './room-page.component';
import { RouterModule } from '@angular/router';
import { RoomsModule } from 'src/app/features/rooms/rooms.module';

@NgModule({
  declarations: [
    RoomPageComponent
  ],
  imports: [
    RoomsModule,
    CommonModule,
    RouterModule,
  ]
})
export class RoomPageModule { }
