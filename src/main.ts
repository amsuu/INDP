// /// <reference types="@angular/localize" />

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// import { provideHttpClient } from '@angular/common/http';
// import { provideTranslateService } from '@ngx-translate/core';
import { /* BrowserModule, */bootstrapApplication } from '@angular/platform-browser';
// import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';


bootstrapApplication(AppComponent, appConfig)// {
//     providers: [
//         importProvidersFrom(BrowserModule, AppRoutingModule),
//         provideHttpClient(),
//         provideTranslateService({
//             defaultLanguage: 'en'
//         })
//     ]
// })
  .catch(err => console.error(err));
