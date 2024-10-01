import { Component } from '@angular/core';

@Component({
  selector: 'app-theory-learn-page',
  templateUrl: './theory-learn-page.component.html',
  styleUrls: ['./theory-learn-page.component.scss']
})
export class TheoryLearnPageComponent {
  getAllPageIds(level: number): string[] {
    let ids: string[] = [];
    Array.from(document.getElementsByTagName(`H${level}`)).forEach(elem => {
      ids.push(elem.id);
    });
    return ids
  }
}
