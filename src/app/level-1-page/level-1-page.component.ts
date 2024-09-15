import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor (private router: Router) { }

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
    if (this.currQuestion === 1) {
      this.router.navigate([]);
      return;
    }
    this.currQuestion--;
    const id = this.currQuestion;
    this.navToEl(id);
  }
  nextClicked(next: HTMLButtonElement, wrapper: HTMLDivElement) {
    if (this.currQuestion === this.len - 1) {
      return;
    }
    this.currQuestion++;
    const id = this.currQuestion;
    this.navToEl(id);
  }
  navToEl(id: number, parent?: HTMLElement) {
    // const domId = `question-${this.currQuestion - 1}`;
    // if (parent) {
      // var target = document.getElementById(domId);
      // if (target && target.parentNode) {
        // (target.parentNode as HTMLElement).scrollTop = target.offsetTop;
      // }
      // parent.children[id].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    // }
    // this.router.navigate([], { fragment: domId });
    // const element = document.getElementById(id);
    // if (element) {
      // element.scrollIntoView();
    // }
  }
}
