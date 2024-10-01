import { Component } from '@angular/core';

@Component({
  selector: 'app-theory-learn-page',
  templateUrl: './theory-learn-page.component.html',
  styleUrls: ['./theory-learn-page.component.scss']
})
export class TheoryLearnPageComponent {
  allPages1: string[] = [];

  constructor() {
    this.allPages1 = this.getAllPages(1);
  }
  getAllPages(level: number): string[] {
    let ids: string[] = [];
    Array.from(document.getElementsByTagName("H1")).forEach(elem => {
      ids.push(elem.id);
    });
    return ids
  }
}
