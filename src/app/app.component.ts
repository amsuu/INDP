import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { HueService } from './hue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INDP';

  constructor (private themeService: ThemeService, private hueService: HueService) {}
  
  ngOnInit() {
    this.themeService.syncTheme();
    this.hueService.syncHue();
  }

}
