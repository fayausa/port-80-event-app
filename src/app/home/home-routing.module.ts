import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CodeOfConductComponent } from '../code-of-conduct/code-of-conduct.component';
import { ContactComponent } from '../contact/contact.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoopbackComponent } from '../loopback/loopback.component';
import { MapComponent } from '../map/map.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from './about/about.component';
import { PanellistComponent } from './panellist/panellist.component';
import { PremiseComponent } from './premise/premise.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
@NgModule({
  imports: [
    RouterModule.forChild([
       { path: '', component: LandingPageComponent },
      { path: 'home', component: HomeComponent ,
       children: [{
           path: 'coc',
           component: CodeOfConductComponent
         },
         {
           path: 'map',
           component: MapComponent
         },
         {
           path: 'register',
           component: RegisterComponent
         },
         {
           path: 'contact',
           component: ContactComponent
         },
         {
           path: 'loopback',
           component: LoopbackComponent
         },
         { path: 'premise', component: PremiseComponent },
         { path: 'about', component: AboutComponent },
         { path: 'schedule', component: ScheduleComponent },
         { path: 'speakers', component: SpeakersComponent },
         { path: 'panellists', component: PanellistComponent }
       ]
      },

      // { path: 'coc', component: CodeOfConductComponent },

    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
