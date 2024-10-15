import { Injectable } from '@angular/core';
import { AdjacentValues } from "./adjacent-values";

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
const theoryStructure = {
  'Interslavic. History of Slavic Languages': [
    'History of Slavic Languages',
    'Why Interslavic? The slavic people and more',
  ],
  'Cases': [
    'Meaning of Cases',
    'Direct Object? Indirect Object??',
    'Prepositions',
  ],
  'How to write in Interslavic': [
    'Keyboard Layouts',
    'Orthography',
  ]
};
const structures: Record<string, any> = {
  'theory': theoryStructure,
  'practice': {},
  'concise': {},
};

const nonURLSafeChars = /[\ \;\/\?\:\@\=\&\"\<\>\#\%\{\}\|\^\~\[\]\`]/gi;


@Injectable({
  providedIn: 'root'
})
export class LearnStructureService {

  getAdjacentValues(subsection: string, path: string[]): AdjacentValues
  {
    // the subsection (e.g. 'theory', 'practice', etc.)
    // in which we are working
    let workingSubsection = structures[subsection.trim().toLowerCase()];

    // the containing element of the one specified in the "path" argument
    let workingParent = workingSubsection;
    for (let i = 0; i < path.length - 1; i++) {
      workingParent = workingParent[path[i]];
    }

    // get all of the adjecent keys or values
    let adjacentValues: string[] = [];
    if (Array.isArray(workingParent)) {
      adjacentValues = Object.values(workingParent);
    } else if (typeof workingParent === typeof { }) {
      adjacentValues = Object.keys(workingParent);
    }

    // to return these
    let _self = path[path.length - 1];
    let top: string[] = [];
    let bottom: string[] = [];

    // splits the adjacentValues into the ones which are
    // before the value, the value itself, and after the value
    for (let i = 0; i < adjacentValues.length; i++) {
      let adjacentValue = adjacentValues[i];

      if (adjacentValue === _self) {
        for (i++; i < adjacentValues.length; i++) {
          adjacentValue = adjacentValues[i];
          bottom.push(adjacentValue);
        } break;
      } else {
        top.push(adjacentValue);
      }
    }

    return {
      top: top,
      _self: _self,
      bottom: bottom,
      all: adjacentValues
    }
  }


  private trimChar(str: string, char: string) {
    return str.replace(
      new RegExp(
        `(^\\${char}+)|(\\${char}+$)`,"g"
      ),
      ""
    );
  }
  routify(str: string): string {
    str = str.trim().toLowerCase();
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (ch.match(nonURLSafeChars)) {
        newStr += '-';
      } else {
        newStr += ch;
      }
    }

    return newStr;
  }
}
