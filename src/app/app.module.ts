import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SettingsComponent } from './settings/settings.component';
import { Level1pageComponent } from './level-1-page/level-1-page.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { SwitchComponent } from './switch/switch.component';
import { SegmentedMultipleSelectionComponent } from './segmented-multiple-selection/segmented-multiple-selection.component';
import { SegmentedSingleSelectionComponent } from './segmented-single-selection/segmented-single-selection.component';
import { Level1QuizQuestionComponent } from './level-1-quiz-question/level-1-quiz-question.component';
import { LearnPageComponent } from './learn-page/learn-page.component';
import { HomeComponent } from './home/home.component';
import { LevelSelectCardsComponent } from './level-select-cards/level-select-cards.component';
import { Level2QuizQuestionComponent } from './level-2-quiz-question/level-2-quiz-question.component';
import { Level2PageComponent } from './level-2-page/level-2-page.component';
import { PageNavigationMenuComponent } from './page-navigation-menu/page-navigation-menu.component';
import { PhraseWithMoreInfoComponent } from './phrase-with-more-info/phrase-with-more-info.component';
import { PhraseExplainationComponent } from './phrase-explaination/phrase-explaination.component';
import { HueSelectorComponent } from './hue-selector/hue-selector.component';
import { SentenceExampleComponent } from './sentence-example/sentence-example.component';
import { TheoryLearnPageComponent } from './theory-learn-page/theory-learn-page.component';
import { PageNavigationMenuContentComponent } from './page-navigation-menu-content/page-navigation-menu-content.component';
import { DesaturationSliderComponent } from './desaturation-slider/desaturation-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SettingsComponent,
    Level1pageComponent,
    ThemeSelectorComponent,
    SwitchComponent,
    SegmentedMultipleSelectionComponent,
    SegmentedSingleSelectionComponent,
    Level1QuizQuestionComponent,
    LearnPageComponent,
    HomeComponent,
    LevelSelectCardsComponent,
    Level2QuizQuestionComponent,
    Level2PageComponent,
    PageNavigationMenuComponent,
    PhraseWithMoreInfoComponent,
    PhraseExplainationComponent,
    HueSelectorComponent,
    SentenceExampleComponent,
    TheoryLearnPageComponent,
    PageNavigationMenuContentComponent,
    DesaturationSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
