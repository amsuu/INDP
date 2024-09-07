import { OnInit, Component, ElementRef } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  constructor(private elementRef: ElementRef, private themeService: ThemeService) {}

  // get theme from local storage if possible
  // add event listeners
  ngOnInit() {
    this.updateThemeSelector();

    this.elementRef.nativeElement.querySelector('.theme-selector')
    .addEventListener('click', this.toggleThemeHandler.bind(this));
  }

  // Event listener to the buttons.
  // Changes the theme in UI
  // AND in local storage
  toggleThemeHandler() {

    // change theme in local storage
    this.themeService.toggleTheme();

    // make sure you are setting whatever is in the local storage
    let newTheme = localStorage.getItem('theme');

    // change the UI (extra condition at the end because of types)
    this.updateThemeSelector(newTheme === 'light' ? 'light' : 'dark');
  }

  // updates classes to show the correct theme visually
  updateThemeSelector(theme: 'light' | 'dark' = this.themeService.getCurrentThemeName()) {

    this.elementRef.nativeElement
    .querySelector(`#theme-selection-${theme}`)
    .classList.add('active-theme');

    this.elementRef.nativeElement
    .querySelector(`#theme-selection-${this.themeService.getOppositeTheme(theme)}`)
    .classList.remove('active-theme');
  }
}
