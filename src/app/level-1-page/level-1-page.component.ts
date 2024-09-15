import { Component, Input } from '@angular/core';

type Question = {
  word: string,
  case: string,
  number: string,
  answer: string,
};

@Component({
  selector: 'app-level1page',
  templateUrl: './level-1-page.component.html',
  styleUrls: ['./level-1-page.component.scss']
})
export class Level1pageComponent {
  len = 5;
  currQuestion = 0;
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
  keyboardClicked(keyboard: HTMLButtonElement) {

  }
  backClicked(back: HTMLButtonElement, wrapper: HTMLDivElement) {
    if (this.currQuestion === 0) {
      return;
    }
    this.currQuestion--;
  }
  nextClicked(next: HTMLButtonElement, wrapper: HTMLDivElement) {
    if (this.currQuestion === this.len - 1) {
      return;
    }
    this.currQuestion++;
  }
}
