import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1pageComponent } from './level-1-page/level-1-page.component'
import { SettingsComponent } from './settings/settings.component'
import { LearnPageComponent } from './learn-page/learn-page.component';
import { HomeComponent } from './home/home.component';
import { Level2PageComponent } from './level-2-page/level-2-page.component';
import * as _MeaningOfCases from './_learn/theory/cases/meaning-of-cases/meaning-of-cases.component';
import * as _Prepositions from './_learn/theory/cases/prepositions/prepositions.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level/1', component: Level1pageComponent },
  { path: 'level/2', component: Level2PageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'learn', component: LearnPageComponent },
  { path: 'learn/theory', redirectTo: 'learn/theory/cases/meaning-of-cases', pathMatch: 'full' },
  { path: 'learn/theory/cases/meaning-of-cases', component: _MeaningOfCases._Component },
  { path: 'learn/theory/cases/prepositions', component: _Prepositions._Component }
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

export class AppRoutingModule { }
