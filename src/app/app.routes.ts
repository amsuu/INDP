import { Routes } from '@angular/router';
import { Level1pageComponent } from './level-1-page/level-1-page.component'
import { SettingsComponent } from './settings/settings.component'
import { LearnPageComponent } from './learn/learn-page/learn-page.component';
import { HomeComponent } from './home/home.component';
import { Level2PageComponent } from './level-2-page/level-2-page.component';
import { LearnRoutingService } from "./learn/learn-routing.service";

const routingService = new LearnRoutingService();
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level/1', component: Level1pageComponent },
  { path: 'level/2', component: Level2PageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'learn', component: LearnPageComponent },
  ...routingService.formatPathsForRoutesTS(routingService.CompiledPaths)
];
