import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CodeOfConductComponent } from './code-of-conduct.component';
import { HomeComponent } from './home.component';
import { MapComponent } from '../map/map.component';
import { ContactComponent } from '../contact/contact.component'
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'coc', component: CodeOfConductComponent },
      { path: 'map', component: MapComponent },
      { path: 'contact', component: ContactComponent },

    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
