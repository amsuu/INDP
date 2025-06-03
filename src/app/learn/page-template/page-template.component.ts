import { Component } from '@angular/core';
import { SideProgressBarComponent } from "../side-progress-bar/side-progress-bar.component";
import { LearnNavigationCompactComponent } from "../navigation-compact/navigation-compact.component";
import { LearnNavigationSideComponent } from "../navigation-side/navigation-side.component";

@Component({
  selector: 'learn-page-template',
  standalone: true,
  imports: [ SideProgressBarComponent, LearnNavigationCompactComponent, LearnNavigationSideComponent ],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss',
})
export class LearnPageTemplateComponent {
  getAllPageIds(level: number): string[] {
    let ids: string[] = [];
    Array.from(document.getElementsByTagName(`H${level}`)).forEach(elem => {
      ids.push(elem.id);
    });
    return ids
  }
}
