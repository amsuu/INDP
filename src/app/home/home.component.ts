import { Component } from '@angular/core';
import { LevelSelectCardsComponent } from '../level-select-cards/level-select-cards.component';
import { SlovnikService } from "../slovnik.service";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink, LevelSelectCardsComponent]
})
export class HomeComponent {

  constructor(private slovnikService: SlovnikService) {

  }
}
