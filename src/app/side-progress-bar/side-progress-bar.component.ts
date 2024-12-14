import { Component, Input, OnInit, HostListener } from '@angular/core';
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
  headerElems: HTMLElement[] = [];

  constructor() {
    if (this.currentPage >= this.pages.length) {
      this.currentPage = this.pages.length - 1;
    }
  }

  ngOnInit() {
    this.pages.forEach(page => {
      let el = document.getElementById(page) as HTMLElement;
      this.headerElems.push(el);
    });
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    let vh = Math.max(
      document.documentElement.clientHeight
      || 0, window.innerHeight
      || 0
    );
    for (let i = 0; i < this.headerElems.length; i++) {
      const el = this.headerElems[i];
      const pos = this.position(el);
      if (pos >= 0 && pos <= vh/2) {
        this.changeCurrentPageIndex(i);
        break;
      }
    }
  }
  position(el: HTMLElement) {
    var top = 0;
    let browser_safe_scroll_value = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0
    ;
    top = el.offsetTop - browser_safe_scroll_value;

    return top;
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
