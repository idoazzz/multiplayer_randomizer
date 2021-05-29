import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent }, 
  { path: 'start', component: RoomPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
