import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  constructor() { }

  getCurrentTheme = () => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

  toggleTheme() {

    let currentTheme = document.body.getAttribute('theme') || 'light';
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // setTheme() here because angular is being stupid
    document.body.setAttribute('theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }


  getOppositeTheme = (theme: string) => theme === 'light' ? 'dark' : 'light';
}
