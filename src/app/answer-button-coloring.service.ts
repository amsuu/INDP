import { Injectable } from '@angular/core';
type colorOpts = {
  slOverride: {
    light: string,
    dark: string,
  },
};

@Injectable({
  providedIn: 'root'
})
export class AnswerButtonColoringService {

  constructor() { }

  addStyle(el: HTMLElement, css: string) {
    el.setAttribute('style', `${el.getAttribute('style')} ${css}`);
  }

  setForeground(el: HTMLElement, color: string) {
    this.addStyle(el, `color: ${color};`)
  }

  colorAppropriately(el: HTMLElement, correct: boolean /* for now */, opts: colorOpts = {
    slOverride: {
      light: 'accent',
      dark: 'secondary',
    },
  }) {
    if (correct) {
      this.colorCorrect(el, opts);
    } else {
      this.colorIncorrect(el, opts);
    }
  }

  colorCorrect(el: HTMLElement, opts: colorOpts) {
    let hue = document.body.getAttribute('hue');
    if (document.body.getAttribute('theme') === 'dark') {
      this.addStyle(el, `
        color: var(--background) !important;
        background-color: hsl(var(--hue-green), var(--${opts.slOverride.light}-sl));
      `);
    } else {
      this.addStyle(el, `
        color: var(--text) !important;
        background-color: hsl(var(--hue-green), var(--${opts.slOverride.dark}-sl)) !important;
      `);
    }
  }

  colorIncorrect(el: HTMLElement, opts: colorOpts) {

      if (document.body.getAttribute('theme') === 'dark') {
        this.addStyle(el, `
          color: var(--background) !important;
          background-color: hsl(var(--hue-red), var(--${opts.slOverride.light}-sl));
        `);
      } else {
        this.addStyle(el, `
          color: var(--text) !important;
          background-color: hsl(var(--hue-red), var(--${opts.slOverride.dark}-sl)) !important;
        `);
      }
  }
}
