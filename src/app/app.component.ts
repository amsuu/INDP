import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INDP';

  constructor (private funcs: ThemeService) {}
  
  ngOnInit() {

    let currentTheme = this.funcs.getCurrentTheme() === 'dark' ? 'dark' : 'light';

    this.funcs.toggleTheme();

    if (currentTheme === 'light') {
      this.funcs.toggleTheme();
    }
  }
}
