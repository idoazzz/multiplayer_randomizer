import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupButtonComponent } from './components/startup-button/startup-button.component';
import { StartupMenuComponent } from './components/startup-menu/startup-menu.component';



@NgModule({
  declarations: [
    StartupButtonComponent,
    StartupMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StartupModule { }
