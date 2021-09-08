import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacingComponent } from './facing/facing.component';
import { FluxoComponent } from './fluxo/fluxo.component';


const routes: Routes = [
  { path: 'fluxo', component: FluxoComponent },
  { path: 'facing', component: FacingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
