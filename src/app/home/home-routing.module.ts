import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component'
import { CodeOfConductComponent } from '../code-of-conduct/code-of-conduct.component';
import { LoopbackComponent } from '../loopback/loopback.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'coc', component: CodeOfConductComponent },
      { path: 'map', component: MapComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'loopback', component: LoopbackComponent },

    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
