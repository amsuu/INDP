import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1pageComponent } from './level-1-page/level-1-page.component'
import { SettingsComponent } from './settings/settings.component'
import { HelpPageComponent } from './help-page/help-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'level-1', component: Level1pageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpPageComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
