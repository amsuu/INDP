import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-side-progress-bar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './side-progress-bar.component.html',
  styleUrl: './side-progress-bar.component.scss'
})
export class SideProgressBarComponent {

  @Input() pages: string[] = [''];
  @Input() currentPage: number = 0;

  constructor() {
    if (this.currentPage >= this.pages.length) {
      this.currentPage = this.pages.length - 1;
    }
  }
  getTitleContent(id: string) {
    let title = document.getElementById(id);
    if (title) {
      return (title as HTMLElement).innerText;
    }
    return '';
  }

  navToTitleIndex(i: number) {
    let id = this.pages[i];
    let title = document.getElementById(id);
    if (i === 0) {
      title = document.body;
    }
    if (title) {
      title.scrollIntoView();
      (title as HTMLElement).focus({ preventScroll: true });
    }
  }

  changeCurrentPageIndex(i: number) {
    this.currentPage = i;
  }
}
