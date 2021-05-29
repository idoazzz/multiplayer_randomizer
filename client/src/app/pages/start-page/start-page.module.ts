import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { StartupModule } from '../../features/startup/startup.module'

@NgModule({
  declarations: [
    StartPageComponent,
  ],
  imports: [
    CommonModule,
    StartupModule,
  ]
})
export class StartPageModule { }
