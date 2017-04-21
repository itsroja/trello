

import { Routes } from '@angular/router';

import { TeamComponent } from 'app/team/team.component';
import { GraphsComponent } from 'app/graphs/graphs.component';
import { HomeComponent } from './home/home.component';
//import { exportToExcelComponent } from 'app/exportToExcel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Graphs', component: GraphsComponent }
  //{ path: 'exportToExcel', component: exportToExcelComponent }
];
