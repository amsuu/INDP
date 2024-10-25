import { Component } from '@angular/core';
import { NgFor } from "@angular/common";
import { LearnStructureService } from "../learn-structure.service";

@Component({
  selector: 'app-learn-navigation-side',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './learn-navigation-side.component.html',
  styleUrl: './learn-navigation-side.component.scss'
})
export class LearnNavigationSideComponent {

  Object = Object;
  constructor(public learnStructure: LearnStructureService) { }


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
