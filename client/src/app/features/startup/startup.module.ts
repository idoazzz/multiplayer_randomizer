import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupMenuComponent } from './components/startup-menu/startup-menu.component';
import { StartupButtonComponent } from './components/startup-button/startup-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StartupMenuComponent,
    StartupButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    StartupMenuComponent,
    StartupButtonComponent,
  ]
})
export class StartupModule { }
