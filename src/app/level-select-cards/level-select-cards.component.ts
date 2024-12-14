import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-level-select-cards',
    templateUrl: './level-select-cards.component.html',
    styleUrls: ['./level-select-cards.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class LevelSelectCardsComponent {
  @Input() levels = [{levelOption: 'Level 1', routerLink: '/level-1', description: ''}]
}
