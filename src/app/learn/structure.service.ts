import { Injectable } from '@angular/core';
import { AdjacentValues } from "./adjacent-values";
import { LearnRoutingService, LearnPageStructure } from "./routing.service";


@Injectable({
  providedIn: 'root'
})
export class LearnStructureService {

  constructor (private learnRouting: LearnRoutingService) { }



  // used by outside //

  public getAdjacentValues(subsection: string, path: string[]): AdjacentValues {
    // the subsection (e.g. 'theory', 'practice', etc.)
    // in which we are working
    let workingSubsection = this.learnRouting.Structures[subsection.trim().toLowerCase()];

    // the containing element of the one specified in the "path" argument
    let workingParent: Record<string, any> = workingSubsection;
    for (let i = 0; i+1 < path.length; i++) {
      workingParent = workingSubsection[path[i]];
    }
    let workingParentNamesOnly: string[] = [];
    for (let i = 0; i < Object.keys(workingParent).length; i++) {
      const key = Object.keys(workingParent)[i];
      workingParentNamesOnly.push(key);
    }

    return this.getAdjacentValuesOfElemInObject(path[path.length - 1], workingParent);
  }
  // ↑ depends on ↓
  private getAdjacentValuesOfElemInObject(elem: any, object: any): AdjacentValues {
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







  // unused by anything: //

  // self-explainatory
  private getChildrenValuesOfObject(object: any): any[] {
    // get the adjacent values of any sample child
    return this.getAdjacentValuesOfElemInObject(
      this.indexArrayOrObject(object), object
    ).all;
  }

  // See: AdjacentValues type.
  // This gets the AdjacentValues of an article within the /learn structure of the website
  //
  // param `subsection`: for example 'theory' or 'practice', etc.
  // param `path`: for example ['Interslavic. History of Slavic Languages', 'History of Slavic Languages']
  private getAdjacentComponent(subsection: string, path: string[]): AdjacentValues {
    let workingSubsection: LearnPageStructure = this.learnRouting.Structures[subsection.trim().toLowerCase()];

    let workingParent = workingSubsection[path[0]];
    let workingChild = workingSubsection[path[1]];
    let adjacentComponents = Object.values(workingParent);

    // to return
    let _self = workingChild;
    let top: string[] = [];
    let bottom: string[] = [];

    // splits the adjacentComponents into the ones which are
    // before the value, the value itself, and after the value
    for (let i = 0; i < adjacentComponents.length; i++) {
      let adjacentComponent = adjacentComponents[i];

      if (adjacentComponent === _self) {
        for (i++; i < adjacentComponents.length; i++) {
          adjacentComponent = adjacentComponents[i];
          bottom.push(adjacentComponent);
        } break;
      } else {
        top.push(adjacentComponent);
      }
    }

    return {
      top: top,
      _self: _self,
      bottom: bottom,
      all: adjacentComponents
    }
  }

  private getElemsAtDepthInObject(depth: number, object: any, underIndexes: number[] = []) {
    if (typeof underIndexes !== 'undefined' && underIndexes.length === 0) {
      for (let i = 0; i < depth; i++) {
        underIndexes.push(0);
      }
    }
    let sampleElement = this.indexArrayOrObject(object, underIndexes[0]);
    for (let i = 0; i < depth; i++) {
      sampleElement = this.indexArrayOrObject(sampleElement, underIndexes[i]);
    }
    return this.getAdjacentValuesOfElemInObject(sampleElement, object);
  }

  // checks if a given object is either an array or an object
  private isJSON(object: any) {
    return Array.isArray(object) || typeof object === typeof { };
  }

  private indexArrayOrObject(object: any, times: number = 0) {
    if (Array.isArray(object)) {
      return object[times - 1];
    } else if (typeof object === typeof { }) {
      return object[Object.keys(object)[times - 1]];
    }
  }

}
