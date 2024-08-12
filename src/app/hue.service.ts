import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type Hue = 'red' | 'orange' | 'yellow' | 'yellow-green' | 'green' | 'goluboy' | 'blue' | 'blue-purple' | 'purple' | 'magenta' | 'pink';

export const hueNames = [
  'red', 'orange', 'yellow', 'yellow-green',
  'green', 'goluboy', 'blue', 'blue-purple',
  'purple', 'magenta', 'pink',
]

@Injectable({
  providedIn: 'root'
})
export class HueService {

  constructor() { }

  getCurrentHue() {
    let currentHue = -1;
    let locStg = localStorage.getItem('hue');
    if (locStg) {
      let indOf = hueNames.indexOf(locStg);
      if (indOf !== -1) {
        currentHue = indOf;
      }
    }

    return currentHue;
  }

  getCurrentHueOrZero() {
    let currentHue = this.getCurrentHue();

    if (currentHue === -1) {
      currentHue = 0;
    }

    return currentHue;
  }

  changeHue(n: number) {
    let newHueName = hueNames[n];

    localStorage.setItem('hue', newHueName);
    document.documentElement.style.setProperty('--hue', `var(--hue-${newHueName})`);
    document.body.setAttribute('hue', newHueName);
  }

  syncHue() {
    let currentHue = this.getCurrentHueOrZero();

    if (currentHue === -1) currentHue = 0;

    this.changeHue(currentHue);
  }
}
