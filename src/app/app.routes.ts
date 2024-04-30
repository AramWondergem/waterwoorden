import { Routes } from '@angular/router';
import {ListPageComponent} from "./components/list-page/list-page.component";
import {InfoPageComponent} from "./components/info-page/info-page.component";

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListPageComponent },
  { path: "info", component: InfoPageComponent },
  { path: '**', redirectTo: '/list'}
];
