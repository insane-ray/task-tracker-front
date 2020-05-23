import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalLayoutComponent } from './components/portal-layout/portal-layout.component';
import { SharedModule } from "../../shared/shared.module";
import { BoardComponent } from './pages/board/board.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [PortalLayoutComponent, BoardComponent, UsersComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule,
  ]
})
export class PortalModule { }
