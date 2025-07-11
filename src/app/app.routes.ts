import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component'
import { LearnComponent } from './learn/learn.component';
import { LearnRoutingService } from "./learn/routing.service";

import { Level1pageComponent } from './levels/level-1-page/level-1-page.component'
import { Level2PageComponent } from './levels/level-2-page/level-2-page.component';

import { DeclensorComponent } from './declensor/declensor.component';


const routingService = new LearnRoutingService();
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level/1', component: Level1pageComponent },
  { path: 'level/2', component: Level2PageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'declensor', component: DeclensorComponent },

  // these are my own files compile from learn/_learn file structure
  // see: routingService
  ...routingService.formatPathsForRoutesTS(routingService.CompiledPaths)
];
