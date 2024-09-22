import { Component } from '@angular/core';
import { LevelSelectCardsComponent } from '../level-select-cards/level-select-cards.component';
import { SlovnikService } from "../slovnik.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private slovnikService: SlovnikService) {
    this.slovnikService.getSlovnik();
  }

}
