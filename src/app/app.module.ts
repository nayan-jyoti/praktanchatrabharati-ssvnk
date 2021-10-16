import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material/material.module';
import { ListOfActivitiesComponent } from './list-of-activities/list-of-activities.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { AboutComponent } from './about/about.component';
import { ModelConstants } from 'src/ModelConstants';
import { ListOfExComponent } from './list-of-ex/list-of-ex.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfActivitiesComponent,
    RepresentativesComponent,
    AboutComponent,
    ListOfExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
    ],
  providers: [
    ModelConstants
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
