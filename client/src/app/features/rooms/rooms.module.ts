import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalUserAvatarComponent } from './components/local-user-avatar/local-user-avatar.component';
import { RemoteUserAvatarComponent } from './components/remote-user-avatar/remote-user-avatar.component';
import { AvatarsHolderComponent } from './components/avatars-holder/avatars-holder.component';
import { RoomWebsocketService } from './services/room-websocket.service';
import { RoomStateService } from './services/room-state.service';
import { WinnerSignComponent } from './components/winner-sign/winner-sign.component';

@NgModule({
  providers: [
    RoomWebsocketService,
    RoomStateService,
  ],
  declarations: [
    LocalUserAvatarComponent,
    RemoteUserAvatarComponent,
    AvatarsHolderComponent,
    WinnerSignComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AvatarsHolderComponent,
    WinnerSignComponent,
  ]
})
export class RoomsModule { }
