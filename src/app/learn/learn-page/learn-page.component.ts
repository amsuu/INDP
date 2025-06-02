import { Component } from '@angular/core';
import { LevelSelectCardsComponent } from '../../level-select-cards/level-select-cards.component';

@Component({
    selector: 'app-learn-page',
    templateUrl: './learn-page.component.html',
    styleUrls: ['./learn-page.component.scss'],
    standalone: true,
    imports: [LevelSelectCardsComponent]
})
export class LearnPageComponent {

}
