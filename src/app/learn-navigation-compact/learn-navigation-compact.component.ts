import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

import { LearnStructureService } from "../learn-structure.service";
import { AdjacentValues } from "../adjacent-values";

@Component({
  selector: 'app-learn-navigation-compact',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './learn-navigation-compact.component.html',
  styleUrl: './learn-navigation-compact.component.scss'
})
export class LearnNavigationCompactComponent {
  @Input() structure: string[] = [ 'Cases', 'Meaning of Cases' ];
  adjacentValuesOfEachStructureElement: AdjacentValues[] = [];
  shorthand(i: number): AdjacentValues {
    return this.adjacentValuesOfEachStructureElement[i];
  }
  constructor(public strct: LearnStructureService) {
    for (let i = 0; i < this.structure.length; i++) {
      const structureElement = this.structure[i];
      this.adjacentValuesOfEachStructureElement.push(this.strct.getAdjacentValues('theory', this.structure.slice(0, i+1)));
    }
  }

  revealOtherOptions(currentOption: HTMLElement) {
    let parent = currentOption.parentElement;
    if (parent) {
      Array.from(parent.children).forEach(child => {
        child.classList.toggle('show');
      })
    }
  }
}
