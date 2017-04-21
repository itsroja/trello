

import { Routes } from '@angular/router';

import { TeamComponent } from 'app/team/team.component';
import { GraphsComponent } from 'app/graphs/graphs.component';
import { homeComponent } from './home.component';
//import { exportToExcelComponent } from 'app/exportToExcel.component';

export const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Graphs', component: GraphsComponent }
  //{ path: 'exportToExcel', component: exportToExcelComponent }
];
