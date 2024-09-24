import { Component, OnInit } from '@angular/core';
import { LevelSelectCardsComponent } from '../level-select-cards/level-select-cards.component';
import { SlovnikService } from "../slovnik.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private slovnikService: SlovnikService) {
      console.log('test');
    (async() => {
      console.log('test');
      console.log(await this.slovnikService.getSlovnik());
      console.log('test');
    })();
  }

  NgOnInit() {
  }

}
