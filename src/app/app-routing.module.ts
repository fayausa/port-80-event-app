import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MsgComponent } from './admin/msg.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notify', component: MsgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
