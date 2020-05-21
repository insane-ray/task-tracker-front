import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacadeRoutingModule } from './facade-routing.module';
import { FacadeLayoutComponent } from './components/facade-layout/facade-layout.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [FacadeLayoutComponent, AuthComponent],
  imports: [
    CommonModule,
    FacadeRoutingModule,
    SharedModule,
  ]
})
export class FacadeModule { }
