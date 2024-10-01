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
}
