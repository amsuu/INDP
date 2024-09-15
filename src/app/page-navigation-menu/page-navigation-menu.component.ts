import { Component, Input } from '@angular/core';

export type NavsObj = {
  id: string,
  title: string,
  subheadings?:{
    id: string,
    title: string
  }[]
}[];

@Component({
  selector: 'app-page-navigation-menu',
  templateUrl: './page-navigation-menu.component.html',
  styleUrls: ['./page-navigation-menu.component.scss']
})
export class PageNavigationMenuComponent {

  @Input() currpage: string = '';
  @Input() navs: NavsObj = [{id: '', title: ''}];

  toggleCollapse(navmenu: HTMLDivElement) {
    navmenu.setAttribute("collapsed",
    `${navmenu.getAttribute("collapsed")
        === "true" ? "false" : "true"
      }`
    )
  }
}
