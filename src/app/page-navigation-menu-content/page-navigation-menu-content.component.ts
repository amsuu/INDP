import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-navigation-menu-content',
  templateUrl: './page-navigation-menu-content.component.html',
  styleUrls: ['./page-navigation-menu-content.component.scss']
})
export class PageNavigationMenuContentComponent {

  @Input() currpage: string = '';
  @Input() navs: {
    id: string,
    title: string,
    subheadings?:{
      id: string,
      title: string
    }[]
  }[] = [{id: '', title: ''}];
}
