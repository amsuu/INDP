import { Component, Input } from '@angular/core';
import { NavsObj } from '../page-navigation-menu/page-navigation-menu.component';

@Component({
  selector: 'app-page-navigation-menu-content',
  templateUrl: './page-navigation-menu-content.component.html',
  styleUrls: ['./page-navigation-menu-content.component.scss']
})
export class PageNavigationMenuContentComponent {

  @Input() currpage: string = '';
  @Input() navs: NavsObj = [{id: '', title: ''}];
}
