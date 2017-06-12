import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';

import { CovalentChipsModule } from '@covalent/core';
import { CovalentMenuModule } from '@covalent/core';
import { CovalentNotificationsModule } from '@covalent/core';
import { CovalentLayoutModule } from '@covalent/core';
import { CovalentMediaModule } from '@covalent/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PremiseComponent } from './premise/premise.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    PremiseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HomeRoutingModule,
    MdCardModule,
    MdMenuModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdDialogModule,
    MdTabsModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentMenuModule,
    CovalentNotificationsModule
  ],
  providers: []
})
export class HomeModule { }
