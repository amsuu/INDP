import { Injectable } from '@angular/core';
import * as _ from './_learn';

type RoutingRedirectEntry = {
  path: string,
  redirectTo: string,
  pathMatch: string
} | [];
type RoutingPathEntry = {
  path: string,
  component: any
} | [];
type LearnPageStructure = Record<string, Record<string, any>>;


@Injectable({
  providedIn: 'root'
})
export class LearnRoutingService {

  nonURLSafeChars = /[\ \;\/\?\:\@\=\&\"\<\>\#\%\{\}\|\^\~\[\]\`]/gi;

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
      if (ch.match(this.nonURLSafeChars)) {
        newStr += '-';
      } else {
        newStr += ch;
      }
    }

    return newStr;
  }

  /*
  * the "[root]" values here indicate a page of
  * the parent (group) element. E.g. we might want
  * an introductory page to the "Cases" section,
  * but we don't want it to appear as a page NESTED
  * WITHIN the "Cases" section, rather, as the section
  * name itself being the page. This way, if the website
  * decides to redirect the user to a simple /learn/theory/cases
  * URL, then it will get the [root] page, which should always be
  * element 0. Otherwise, it will redirect the user to the
  * first page of the section, which is most likely the intended
  * behaviour anyway. Like this, element 0 is always the most likely
  * intended page for redirection.
  */
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
    this.generatePathsForLearnPage('theory');
  }

  private generatePathsForLearnPage(learnPageName: string) {

    const learnPage = this.structures[learnPageName];

    let progress: string[] = [ ];
    let defaults: RoutingRedirectEntry[] = [];
    let paths: RoutingPathEntry[] = [];

    let parentKeys = Object.keys(learnPage);
    for (let i = 0; i < parentKeys.length; i++) {
      const parentKey = parentKeys[i];
      const parentElem: Record<string, any> = learnPage[parentKey];

      progress.push(this.routify(parentKey));

      let childKeys = Object.keys(parentElem);
      for (let j = 0; j < childKeys.length; j++) {
        const childKey = childKeys[j];
        const childElem = parentElem[childKey];

        progress.push(this.routify(childKey));

        paths.push({
          path: '/learn/' + progress.join('/'),
          component: childElem
        });

        progress.pop();
      }
      progress.pop();
    }
  }

}
