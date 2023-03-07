import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListOfExComponent } from './list-of-ex/list-of-ex.component';
import { ListOfActivitiesComponent } from './list-of-activities/list-of-activities.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'representatives', component: RepresentativesComponent },
  { path: 'activities', component: ListOfActivitiesComponent },
  { path: 'listofex', component: ListOfExComponent },
  { path: 'about-and-contact', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, RepresentativesComponent, ListOfActivitiesComponent, ListOfExComponent, AboutComponent];
