import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { HueService } from './hue.service';
import { TopbarComponent } from "./topbar/topbar.component";
import { RouterOutlet } from "@angular/router";

// import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";

// // import translationsEN from '../../public/i18n/en.json';
// const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader
// = (http: HttpClient) =>
//     new TranslateHttpLoader(http, '../../public/i18n/', '.json');

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ TopbarComponent, RouterOutlet ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INDP';

  constructor (
    private themeService: ThemeService,
    private hueService: HueService,
    // private translate: TranslateService
  ) {
    // this.translate.addLangs(['isv', 'en']);

    // // this.setTranslation('en', translationsEN);

    // this.translate.setDefaultLang('en');
    // // check body lang
    // this.translate.use('en');
  }

  ngOnInit() {
    this.themeService.syncTheme();
    this.hueService.syncHue();
  }
}
