import { Component, AfterViewInit } from '@angular/core';
import { HueService, hueNames } from '../hue.service';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-hue-selector',
    templateUrl: './hue-selector.component.html',
    styleUrls: ['./hue-selector.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class HueSelectorComponent {


  currentHue: number;

  constructor(private hueService: HueService) {
    this.currentHue = this.hueService.getCurrentHueOrZero();
  }

  hueNames = hueNames;

  changeHue(n: number) {
    this.currentHue = n;
    this.hueService.changeHue(n);
  }

  uncollapse(hueSel: HTMLDivElement) {
    this.uncollapseTapCounter = 1;
    hueSel.setAttribute('collapsed', 'false');
  }
  collapse(hueSel: HTMLDivElement) {
    hueSel.setAttribute('collapsed', 'true');
  }

  uncollapseTapCounter = 0;
  uncollapseTAP(hueSel: HTMLDivElement) {


    if (hueSel.getAttribute('collapsed') === 'false') {
      this.uncollapseTapCounter = 0;
    }

    if (this.uncollapseTapCounter === 0) {
      this.uncollapse(hueSel);
      this.uncollapseTapCounter = 1;
    } else {
      this.uncollapseTapCounter = 0;
    }
  }
}
