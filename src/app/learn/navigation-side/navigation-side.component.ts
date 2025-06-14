import { Component } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { LearnStructureService } from "../structure.service";
import { LearnRoutingService } from "../routing.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-learn-navigation-side',
  standalone: true,
  imports: [ NgFor, NgIf, RouterModule ],
  templateUrl: './navigation-side.component.html',
  styleUrl: './navigation-side.component.scss'
})
export class LearnNavigationSideComponent {

  Object = Object;
  constructor(public learnStructure: LearnStructureService, public learnRouting: LearnRoutingService) { }


  revealChildren(parent: HTMLElement) {
    let toChange = [
      parent.querySelector('.icon'),
      parent.querySelector('.children')
    ];
    toChange.forEach(elem => {
      if (elem) { elem.classList.toggle('show'); }
    });
  }
}
