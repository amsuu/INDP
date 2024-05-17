import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1pageComponent } from './level-1-page/level-1-page.component'
import { SettingsComponent } from './settings/settings.component'
import { HelpPageComponent } from './help-page/help-page.component';
import { HomeComponent } from './home/home.component';
import { Level2PageComponent } from './level-2-page/level-2-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level-1', component: Level1pageComponent },
  { path: 'level-2', component: Level2PageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpPageComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
