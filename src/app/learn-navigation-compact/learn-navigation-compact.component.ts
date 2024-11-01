import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

import { LearnStructureService } from "../learn-structure.service";
import { LearnRoutingService } from "../learn-routing.service";
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
  id_prefix = "learn-nav-compact-other-options-";

  adjacentValuesOfEachStructureElement: AdjacentValues[] = [];
  adjacent(i: number): AdjacentValues {
    return this.adjacentValuesOfEachStructureElement[i];
  }
  constructor(public strct: LearnStructureService , public learnRouting: LearnRoutingService) {
    for (let i = 0; i < this.structure.length; i++) {
      const structureElement = this.structure[i];
      this.adjacentValuesOfEachStructureElement.push(this.strct.getAdjacentValues('theory', this.structure.slice(0, i+1)));
    }
  }

  revealOtherOptions(id: number) {
    let compactButtons = Array.from(document.getElementsByClassName('learn-navigation-compact-button'));
    let selfId = 'learn-navigation-compact-button-' + id;
    compactButtons!.forEach(elem => {
      if (elem.id !== selfId) {
        elem.classList.remove("show");
      }
    });
    let selfButton = document.getElementById(selfId);
    selfButton!.classList.toggle("show");

    let otherOptions = document.getElementById(this.id_prefix + id);
    otherOptions!.classList.toggle("show");

    let otherOtherOptions = document.getElementById(this.id_prefix + (id+1)%2);
    otherOtherOptions!.classList.remove("show");
  }
}
