import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  constructor() { }

  toTheme(v: unknown): 'light'|'dark' {
    if (typeof v === typeof '') {
      return v === 'dark' ? 'dark' : 'light';
    } else if (typeof v === typeof 0) {
      return v === 0 ? 'dark' : 'light';
    } else if (typeof v === typeof true) {
      return v ? 'light' : 'dark'
    } else {
      return 'light';
    }
  }

  getCurrentThemeName(): 'light'|'dark' {
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  }

  isCurrentThemeName(check: string) {
    return this.getCurrentThemeName() === this.toTheme(check);
  }

  toggleTheme() {

    let currentTheme = document.body.getAttribute('theme') || 'light';
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // setTheme() here because angular is being stupid
    document.body.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }


  syncTheme() {

    let currentTheme = this.getCurrentThemeName() === 'dark' ? 'dark' : 'light';

    this.toggleTheme();

    if (currentTheme === 'light') {
      this.toggleTheme();
    }
  }


  getOppositeTheme = (theme: string) => theme === 'light' ? 'dark' : 'light';
}
