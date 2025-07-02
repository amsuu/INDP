import { OnInit, Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
    standalone: true
})
export class ThemeSelectorComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  // get theme from local storage if possible
  // add event listeners
  ngOnInit() {
    this.updateThemeSelector();
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

    let themeSelActive = document.getElementById(`theme-selection-${
      theme
    }`);
    let themeSelInactive = document.getElementById(`theme-selection-${
      this.themeService.getOppositeTheme(theme)
    }`);

    if (themeSelActive && themeSelInactive) {
      themeSelActive.classList.add('active-theme');
      themeSelInactive.classList.remove('active-theme');
    }
  }
}
