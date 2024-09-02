import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level-select-cards',
  templateUrl: './level-select-cards.component.html',
  styleUrls: ['./level-select-cards.component.scss']
})
export class LevelSelectCardsComponent {
  @Input() levels = [{levelOption: 'Level 1', routerLink: '/level-1', description: ''}]
}
