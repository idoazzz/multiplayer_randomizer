import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsUserAvatarComponent } from './components/rooms-user/rooms-user-avatar.component';


@NgModule({
  declarations: [
    RoomsUserAvatarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RoomsUserAvatarComponent
  ]
})
export class RoomsModule { }
