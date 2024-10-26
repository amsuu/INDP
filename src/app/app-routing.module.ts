import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1pageComponent } from './level-1-page/level-1-page.component'
import { SettingsComponent } from './settings/settings.component'
import { LearnPageComponent } from './learn-page/learn-page.component';
import { HomeComponent } from './home/home.component';
import { Level2PageComponent } from './level-2-page/level-2-page.component';
import { LearnRoutingService } from "./learn-routing.service";

let routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level/1', component: Level1pageComponent },
  { path: 'level/2', component: Level2PageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'learn', component: LearnPageComponent },
  { path: 'learn/theory', redirectTo: 'learn/theory/cases/meaning-of-cases', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private learnRouting: LearnRoutingService) {
    const defaults = learnRouting.compiledPaths.defaults;
    const paths = learnRouting.compiledPaths.paths;
    for (let i = 0; i < defaults.length; i++) {
      routes.push(defaults[i]);
      console.log(defaults[i]);
    }
    for (let i = 0; i < paths.length; i++) {
      routes.push(paths[i]);
      console.log(paths[i]);
    }
  }
}
