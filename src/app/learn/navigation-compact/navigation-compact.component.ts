import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

import { LearnStructureService } from "../structure.service";
import { LearnRoutingService } from "../routing.service";
import { AdjacentValues } from "../adjacent-values";

@Component({
  selector: 'app-learn-navigation-compact',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './navigation-compact.component.html',
  styleUrl: './navigation-compact.component.scss'
})
export class LearnNavigationCompactComponent {
  @Input() structure: string[] = [ 'Cases', 'Meaning of Cases' ];
  id_prefix = "other-options-";  // this is used in the HTML too

  adjacentValuesOfEach: AdjacentValues[] = [];

  constructor(public structureService: LearnStructureService , public learnRouting: LearnRoutingService) {
    for (let i = 0; i < this.structure.length; i++) {
      this.adjacentValuesOfEach.push(
        this.structureService.getAdjacentValues('theory', this.structure.slice(0, i+1))
      );
    }
  }

  revealOtherOptions(id: number) {
    let compactButtons = Array.from(document.getElementsByClassName('button'));
    let selfId = 'button-' + id;
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
