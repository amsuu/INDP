import { Injectable } from '@angular/core';
import * as _ from './_learn';
import { Routes } from '@angular/router';

type RoutingRedirectEntry = {
  path: string,
  redirectTo: string,
  pathMatch: "full" | "prefix" | undefined
};
type RoutingPathEntry = {
  path: string,
  component: any
};
export type LearnPageStructure = Record<string, Record<string, any>>;

@Injectable({
  providedIn: 'root'
})
export class LearnRoutingService {

  // . isn't technically dangerous to use after the first "/"
  // (i.e.) https://github.com/somethingsomething
  //                          ~~~~~~~~~~~~~~~~~~~~~
  //                                    /\
  //                              here  ||
  // but it makes for an ugly URL so i include it in the regex anyway
  nonURLSafeChars = /[\.\ \;\/\?\:\@\=\&\"\<\>\#\%\{\}\|\^\~\[\]\`]/gi;

  private trimChar(str: string, char: string) {
    return str.replace(
      new RegExp(`(^\\${char}+)|(\\${char}+$)`,"g"),
      ""
    );
  }
  routify(str: string): string {
    str = str.trim().toLowerCase();
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch === ' ') {
        newStr += '-';
      }
      if (ch.match(this.nonURLSafeChars)) {
        // newStr += '-';
      } else {
        newStr += ch;
      }
    }

    return newStr;
  }

  theoryStructure: LearnPageStructure = {
    'Interslavic. History of Slavic Languages': {
      'History of Slavic Languages': _._Theory._ISV._History._Component,
      'Why Interslavic? The slavic people and more': _._Theory._ISV._WhyISV._Component,
    },
    'Cases': {
      'Meaning of Cases': _._Theory._Cases._MeaningOfCases._Component,
      'Direct Object? Indirect Object??': _._Theory._Cases._DirectIndirect._Component,
      'Prepositions': _._Theory._Cases._Prepos._Component,
    },
    'How to write in Interslavic': {
      'Keyboard Layouts': _._Theory._Writing._Keybs._Component,
      'Orthography': _._Theory._Writing._Orthography._Component,
    },
    'Glossary (shortenings)': {
      'Glossary': _._Theory._Glossary.__Glossary._Component,
    }
  };
  structures: Record<string, LearnPageStructure> = {
    'theory': this.theoryStructure,
    'practice': {},
    'concise': {},
  };

  compiledPaths: {
      defaults: RoutingRedirectEntry[],
      paths: RoutingPathEntry[]
  } = {
      defaults: [],
      paths: []
  };

  constructor() {
    const structureKeys = Object.keys(this.structures);
    for (let i = 0; i < structureKeys.length; i++) {
      const structureKey = structureKeys[i];

      this.compiledPaths.defaults.push(...this.generateDefaultsForLearnPage(structureKey));
      this.compiledPaths.paths.push(...this.generatePathsForLearnPage(structureKey));
    }
  }


  private generateDefaultsForLearnPage(learnPageName: string): RoutingRedirectEntry[] {

    const learnPage = this.structures[learnPageName];

    let progress: string[] = [ ];
    let defaults: RoutingRedirectEntry[] = [ ];

    const prefix = `learn/${learnPageName}/`;

    // for every parent page name
    let parentKeys = Object.keys(learnPage);
    for (let i = 0; i < parentKeys.length; i++) {
      const parentKey = parentKeys[i];
      const parentElem: Record<string, any> = learnPage[parentKey];

      // push it to the URL
      progress.push(this.routify(parentKey));

      // for every child page name
      let childKeys: string[] = Object.keys(parentElem);

      // push the first child to the URL
      progress.push(this.routify(childKeys[0]));

      // add the url to the parent page
      // and redirect it to the first child
      defaults.push({
        path: prefix + progress.slice(0, -1).join('/'),
        redirectTo: prefix + progress.join('/'),
        pathMatch: 'full'
      });
      if (i === 0) {
        defaults.push({
          path: prefix.slice(0, -1),
          redirectTo: prefix + progress.join('/'),
          pathMatch: 'full'
        });
      }

      // reset the URL to be free for the next parent
      progress = [];
    }

    return defaults;
  }

  private generatePathsForLearnPage(learnPageName: string): RoutingPathEntry[] {

    const learnPage = this.structures[learnPageName];

    let progress: string[] = [ ];
    let paths: RoutingPathEntry[] = [];

    // for every parent page name
    let parentKeys = Object.keys(learnPage);
    for (let i = 0; i < parentKeys.length; i++) {
      const parentKey = parentKeys[i];
      const parentElem: Record<string, any> = learnPage[parentKey];

      // push it to the URL
      progress.push(this.routify(parentKey));

      // for every child page name
      let childKeys = Object.keys(parentElem);
      for (let j = 0; j < childKeys.length; j++) {
        const childKey = childKeys[j];
        const childElem = parentElem[childKey];

        // push it to the URL
        progress.push(this.routify(childKey));

        // add the url to {paths} along with the appropriate component
        const prefix = `learn/${learnPageName}/`;
        paths.push({
          path: prefix + progress.join('/'),
          component: childElem
        });

        // reset the URL to be free for the next child
        progress.pop();
      }
      // reset the URL to be free for the next parent
      progress.pop();
    }

    return paths;
  }

  public formatPathsForRoutesTS(compiledPaths: { defaults: RoutingRedirectEntry[], paths: RoutingPathEntry[] }) {
    const defaults: RoutingRedirectEntry[] = compiledPaths.defaults;
    const paths: RoutingPathEntry[] = compiledPaths.paths;
    let routes: Routes = [];
    for (let i = 0; i < defaults.length; i++) {
      routes.push(defaults[i]);
    }
    for (let i = 0; i < paths.length; i++) {
      routes.push(paths[i]);
    }
    return routes;
  }
}
