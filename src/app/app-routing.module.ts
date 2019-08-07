import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RedRoutes } from "./red/red.routes";
import { BlueRoutes} from "./blue/blue.routes";
import { GreenRoutes } from "./green/green.routes";

const routes: Routes = [
  {path: '', redirectTo: '/green/medium', pathMatch: 'full'},
    ...RedRoutes,
    ...GreenRoutes,
    ...BlueRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
