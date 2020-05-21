import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacadeLayoutComponent } from "./modules/facade/components/facade-layout/facade-layout.component";
import { PortalLayoutComponent } from "./modules/portal/components/portal-layout/portal-layout.component";
import { ForbiddenComponent } from "./pages/forbidden/forbidden.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'portal',
    pathMatch: 'full'
  },
  {
    path: 'login',
    //canActivate: [FacadeGuard],
    loadChildren: () => import('./modules/facade/facade.module').then(mod => mod.FacadeModule),
    component: FacadeLayoutComponent
  },
  {
    path: 'portal',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./modules/portal/portal.module').then(mod => mod.PortalModule),
    component: PortalLayoutComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
