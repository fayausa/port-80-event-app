import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeOfConductComponent } from './code-of-conduct.component';
import { HomeComponent } from './home.component';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'coc', component: CodeOfConductComponent },
      { path: 'map', component: MapComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
