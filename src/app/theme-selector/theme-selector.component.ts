import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  constructor(private elementRef:ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#theme-selection-light')
    .addEventListener('click', this.toggleTheme.bind(this));
    this.elementRef.nativeElement.querySelector('#theme-selection-dark')
    .addEventListener('click', this.toggleTheme.bind(this));
  }
  
  toggleTheme() {
    let currentTheme = document.body.getAttribute('theme') || 'light';
    document.body.setAttribute('theme', currentTheme === 'light' ? 'dark' : 'light');
    this.elementRef.nativeElement.querySelector('#theme-selection-light').classList.toggle('active-theme');
    this.elementRef.nativeElement.querySelector('#theme-selection-dark').classList.toggle('active-theme');
  }
}
