import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalUserAvatarComponent } from './components/local-user-avatar/local-user-avatar.component';
import { RemoteUserAvatarComponent } from './components/remote-user-avatar/remote-user-avatar.component';
import { AvatarsHolderComponent } from './components/avatars-holder/avatars-holder.component';
import { RoomWebsocketService } from './services/room-websocket.service';
import { RoomStateService } from './services/room-state.service';

@NgModule({
  providers: [
    RoomWebsocketService,
    RoomStateService,
  ],
  declarations: [
    LocalUserAvatarComponent,
    RemoteUserAvatarComponent,
    AvatarsHolderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AvatarsHolderComponent,
  ]
})
export class RoomsModule { }
