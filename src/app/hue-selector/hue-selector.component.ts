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
    hueSel.setAttribute('collapsed', 'false');
  }
  collapse(hueSel: HTMLDivElement) {
    hueSel.setAttribute('collapsed', 'true');
  }
}
