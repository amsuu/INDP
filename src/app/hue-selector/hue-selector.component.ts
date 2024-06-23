import { Component, AfterViewInit } from '@angular/core';
import { HueService, hueNames } from '../hue.service';

@Component({
  selector: 'app-hue-selector',
  templateUrl: './hue-selector.component.html',
  styleUrls: ['./hue-selector.component.scss']
})
export class HueSelectorComponent {

  constructor(private hueService: HueService) {}

  currentHue = this.hueService.getCurrentHueOrZero();

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
      console.log('counter set to 0 (override)');
      this.uncollapseTapCounter = 0;
    }
  
    if (this.uncollapseTapCounter === 0) {
      console.log('uncollapse: ' + this.uncollapseTapCounter);
      this.uncollapse(hueSel);
      this.uncollapseTapCounter = 1;
    } else {
      console.log('counter reset to 0');
      this.uncollapseTapCounter = 0;
    }
  }
}
