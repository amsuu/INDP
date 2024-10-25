import { Injectable } from '@angular/core';
import { AdjacentValues } from "./adjacent-values";


@Injectable({
  providedIn: 'root'
})
export class LearnStructureService {

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
  theoryStructure: Record<string, any> = {
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
  structures: Record<string, any> = {
    'theory': this.theoryStructure,
    'practice': {},
    'concise': {},
  };

  isJSON(object: any) {
    return Array.isArray(object) || typeof object === typeof { };
  }

  getSampleElement(object: any, times: number = 0) {
    if (Array.isArray(object)) {
      return object[times - 1];
    } else if (typeof object === typeof { }) {
      return object[Object.keys(object)[times - 1]];
    }
  }
  getElemsAtDepthInObject(depth: number, object: any, underIndexes: number[] = []) {
    if (typeof underIndexes !== 'undefined' && underIndexes.length === 0) {
      for (let i = 0; i < depth; i++) {
        underIndexes.push(0);
      }
    }
    let sampleElement = this.getSampleElement(object, underIndexes[0]);
    for (let i = 0; i < depth; i++) {
      sampleElement = this.getSampleElement(sampleElement, underIndexes[i]);
    }
    return this.getAdjacentValuesOfElemInObject(sampleElement, object);
  }
  getAdjacentValuesOfElemInObject(elem: any, object: any): AdjacentValues {
    // get all of the adjecent keys or values
    let adjacentValues: string[] = [];
    if (Array.isArray(object)) {
      adjacentValues = Object.values(object);
    } else if (typeof object === typeof { }) {
      adjacentValues = Object.keys(object);
    }

    // to return
    let _self = elem;
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
  getChildrenValuesOfObject(object: any): any[] {

    // get the adjacent values of
    return this.getAdjacentValuesOfElemInObject(
      this.getSampleElement(object), object
    ).all;
  }

  getAdjacentValues(subsection: string, path: string[]): AdjacentValues
  {
    // the subsection (e.g. 'theory', 'practice', etc.)
    // in which we are working
    let workingSubsection = this.structures[subsection.trim().toLowerCase()];

    // the containing element of the one specified in the "path" argument
    let workingParent = workingSubsection;
    for (let i = 0; i < path.length - 1; i++) {
      workingParent = workingParent[path[i]];
    }

    return this.getAdjacentValuesOfElemInObject(path[path.length - 1], workingParent);
  }

}
