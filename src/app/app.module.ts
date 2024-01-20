import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { SwitchComponent } from './switch/switch.component';
import { SegmentedMultipleSelectionComponent } from './segmented-multiple-selection/segmented-multiple-selection.component';
import { SegmentedSingleSelectionComponent } from './segmented-single-selection/segmented-single-selection.component';
import { Level1QuizQuestionComponent } from './level-1-quiz-question/level-1-quiz-question.component';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SettingsComponent,
    HomeComponent,
    ThemeSelectorComponent,
    SwitchComponent,
    SegmentedMultipleSelectionComponent,
    SegmentedSingleSelectionComponent,
    Level1QuizQuestionComponent,
    HelpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
