import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalLayoutComponent } from './components/portal-layout/portal-layout.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [PortalLayoutComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    SharedModule,
  ]
})
export class PortalModule { }
