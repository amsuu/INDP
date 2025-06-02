import { Component } from '@angular/core';
import { SideProgressBarComponent } from "../side-progress-bar/side-progress-bar.component";
import { LearnNavigationCompactComponent } from "../learn-navigation-compact/learn-navigation-compact.component";
import { LearnNavigationSideComponent } from "../learn-navigation-side/learn-navigation-side.component";

@Component({
  selector: 'learn-page-template',
  standalone: true,
  imports: [ SideProgressBarComponent, LearnNavigationCompactComponent, LearnNavigationSideComponent ],
  templateUrl: './learn-page-template.component.html',
  styleUrl: './learn-page-template.component.scss',
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
