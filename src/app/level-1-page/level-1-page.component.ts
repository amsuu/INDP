import { Component, Input, HostListener } from '@angular/core';
import { NgFor } from "@angular/common";
import { ButtonsOverlayComponent } from '../buttons-overlay/buttons-overlay.component';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';

type Question = {
  word: string,
  case: string,
  number: string,
  answer: string,
};

@Component({
    selector: 'app-level1page',
    templateUrl: './level-1-page.component.html',
    styleUrls: ['./level-1-page.component.scss'],
    standalone: true,
    imports: [ButtonsOverlayComponent, NgFor, Level1QuizQuestionComponent]
})
export class Level1pageComponent {

  constructor () { }

  @Input() questions: Question[] = [
    {
      word: 'brat',
      case: 'Dative',
      number: "singular",
      answer: "bratu",
    }, {
      word: "žena",
      case: "Accusative",
      number: "singular",
      answer: "ženų",
    }, {
      word: "duša",
      case: "Instrumental",
      number: "plural",
      answer: "dušami",
    }, {
      word: "dom",
      case: "Locative",
      number: "plural",
      answer: "domah",
    }, {
      word: "nož",
      case: "Instrumental",
      number: "singular",
      answer: "nožem",
    }
  ];
  len = this.questions.length;
}
