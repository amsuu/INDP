import { Component } from '@angular/core';
import { LevelSelectCardsComponent } from '../level-select-cards/level-select-cards.component';

@Component({
    selector: 'app-learn-page',
    templateUrl: './learn.component.html',
    styleUrls: ['./learn.component.scss'],
    standalone: true,
    imports: [LevelSelectCardsComponent]
})
export class LearnComponent {

}
