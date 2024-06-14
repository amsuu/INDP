import { OnInit, Component, ElementRef } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  constructor(private elementRef: ElementRef, private themeService: ThemeService) {}

  ngOnInit() {
    this.updateThemeSelector();
    
    this.elementRef.nativeElement.querySelector('.theme-selector')
    .addEventListener('click', this.toggleThemeHandler.bind(this));
    // this.elementRef.nativeElement.querySelector('#theme-selection-light')
    // .addEventListener('click', this.toggleThemeHandler.bind(this));
    // this.elementRef.nativeElement.querySelector('#theme-selection-dark')
    // .addEventListener('click', this.toggleThemeHandler.bind(this));
  }

  toggleThemeHandler() {
    
    this.themeService.toggleTheme();

    let newTheme = localStorage.getItem('theme');

    // extra condition at the end because of types
    this.updateThemeSelector(newTheme === 'light' ? 'light' : 'dark');
  }

  updateThemeSelector(theme: 'light' | 'dark' = this.themeService.getCurrentTheme()) {

    this.elementRef.nativeElement
    .querySelector(`#theme-selection-${theme}`)
    .classList.add('active-theme');

    this.elementRef.nativeElement
    .querySelector(`#theme-selection-${this.themeService.getOppositeTheme(theme)}`)
    .classList.remove('active-theme');
  }
}
