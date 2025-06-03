import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  constructor() { }

  // Converts string, number, bool,
  // or anything else into "light" or "dark"
  // Default is "light"
  toTheme(v: unknown): 'light'|'dark' {
    // string
    if (typeof v === typeof '') { return v === 'dark' ? 'dark' : 'light' }

    // number
    else if (typeof v === typeof 0) { return v === 0 ? 'dark' : 'light' }

    // bool
    else if (typeof v === typeof true) { return v ? 'light' : 'dark' }

    // anything else
    else { return 'light'; }
  }

  // gets the current theme as set in local storage
  getCurrentThemeName(): 'light'|'dark' {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  }

  // compares two strings as theme types
  compareTheme(a: string, b: string): boolean {
    return this.toTheme(a) === this.toTheme(b);
  }

  // compares the current theme against the argument
  isCurrentThemeName(check: string): boolean {
    return this.getCurrentThemeName() === this.toTheme(check);
  }

  // changes the theme from light to dark and vice versa
  // if there is no theme in local storage, it defaults
  // that the local storage is light, therefore setting
  // the theme to dark now.
  toggleTheme(): void {

    let currentTheme = document.body.getAttribute('theme') || 'light';
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.body.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // syncs everything to local storage
  // if local storage doesn't, exists, it defalts to light
  syncTheme(): void {

    // get the current theme from local storage into a var.
    // if it doesn't exist, default to "light"
    let currentTheme = this.getCurrentThemeName() === 'dark' ? 'dark' : 'light';

    // the idea here is that toggleTheme function
    // will assume that the local storage value is
    // light if it cannot parse it, therefore in such
    // a case setting the theme to dark
    //
    // if the initial theme was set as dark
    // in local storage, then this makes it light
    this.toggleTheme();

    // if initially the theme was not set, or was light
    // then switch back to light. If not then it was
    // dark from the beginning and there is nothing to change
    if (currentTheme === 'light') {
      this.toggleTheme();
    }
  }
  // Sidenote: I am ashamed to admit that,
  // although I am the one who wrote this code,
  // I have absolutely no idea how it handles
  // the situation in which localStorage was
  // already set to "dark". It looks as though
  // it toggles it to "light" and never back to
  // dark again... But it doesn't...

  getOppositeTheme = (theme: string) => theme === 'light' ? 'dark' : 'light';
}
