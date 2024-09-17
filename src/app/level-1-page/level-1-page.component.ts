import { Component, Input, HostListener } from '@angular/core';

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
  currQuestion = -1;

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

  keyboardClicked(keyboard: HTMLDivElement) {
    keyboard.classList.toggle("show");
  }
  backClicked(back: HTMLButtonElement, wrapper: HTMLDivElement) {
    if (this.currQuestion === 0) {
      this.currQuestion--;
      this.navToTop();
      return;
    }
    this.currQuestion--;
    const id = this.currQuestion;
    this.navToQuestion(id);
  }
  nextClicked(next: HTMLButtonElement, wrapper: HTMLDivElement) {
    if (this.currQuestion === this.len - 1) {
      return;
    }
    this.currQuestion++;
    const id = this.currQuestion;
    this.navToQuestion(id);
  }

  navToQuestion(id: number) {
    const el = document.getElementById(`question-${id}`);
    if (el) {
      this.navToEl(el);

      let input = document.querySelector(`#question-${id} input`);
      if (input) {
        (input as HTMLElement).focus({ preventScroll: true });
      }
    }
  }
  navToTop() {
    const top = document.getElementsByClassName('level-info')[0] as HTMLElement;
    if (top) {
      this.navToEl(top);
    }
  }
  navToEl(el: HTMLElement) {
    el.scrollIntoView();
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

  }
  isBehind(el: HTMLElement) {
    const elementPosition = el.offsetTop;
    const scrollPosition = window.pageYOffset;

    return scrollPosition < elementPosition;
  }
  isReached(el: HTMLElement) {
    const elementPosition = el.offsetTop;
    const scrollPosition = window.pageYOffset;

    return scrollPosition >= elementPosition;
  }
  isPassed(el: HTMLElement) {
    const elementPosition = el.offsetTop;
    const elementHeight = el.clientHeight;
    const scrollPosition = window.pageYOffset;

    return scrollPosition >= (elementPosition + elementHeight);
  }
}
