import { Component, Input } from '@angular/core';
import { OnScreenKeyboardComponent } from '../on-screen-keyboard/on-screen-keyboard.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-buttons-overlay',
    standalone: true,
    imports: [OnScreenKeyboardComponent, RouterLink, NgClass],
    templateUrl: './buttons-overlay.component.html',
    styleUrl: './buttons-overlay.component.scss'
})
export class ButtonsOverlayComponent {

  @Input() currQuestion = -1;
  @Input() pageLevel = 1;  // e.g. level 1 page
  @Input({ required: true }) len: number = 0;
  @Input() hideNav: boolean = false;
  @Input() hideHome: boolean = false;

  keyboardClicked(keyboard: HTMLDivElement) {
    keyboard.classList.toggle("show");
  }
  backClicked(back: HTMLButtonElement) {
    if (this.currQuestion === 0) {
      this.currQuestion--;
      this.navToTop();
      return;
    }
    this.currQuestion--;
    const id = this.currQuestion;
    this.navToQuestion(id);
  }
  nextClicked(next: HTMLButtonElement) {
    if (this.currQuestion === this.len - 1) {
      return;
    }
    this.currQuestion++;
    const id = this.currQuestion;
    this.navToQuestion(id);
  }

  navToQuestion(id: number) {
    let domId = `question-${id}`;
    switch (this.pageLevel) {
      case 2:
        domId = `question-${id}-0`
        break;
    }
    const el = document.getElementById(domId);
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
}
