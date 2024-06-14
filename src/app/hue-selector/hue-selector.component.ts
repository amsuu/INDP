import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hue-selector',
  templateUrl: './hue-selector.component.html',
  styleUrls: ['./hue-selector.component.scss']
})
export class HueSelectorComponent {

  constructor() {
    let locSt = localStorage.getItem('hue');
    if (locSt) {
      let indOf = this.hueNames.indexOf(locSt);
      if (indOf !== -1) {
        this.currentHue = indOf;
      }
    }

    this.changeHue(this.currentHue);
  }

  docStyle = getComputedStyle(document.documentElement);
  
  currentHue = 0;
  hueNames = [
    'red',
    'orange',
    'yellow',
    'yellow-green',
    'green',
    'goluboy',
    'blue',
    'blue-purple',
    'purple',
    'magenta',
    'pink',
  ]

  


  changeHue(n: number) {
    this.currentHue = n;
    let newHueName = this.hueNames[n];

    localStorage.setItem('hue', newHueName);
    document.documentElement.style.setProperty('--hue', `var(--hue-${newHueName})`);


  }

  uncollapse(hueSel: HTMLDivElement) {
    hueSel.setAttribute('collapsed', 'false');
  }
  collapse(hueSel: HTMLDivElement) {
    hueSel.setAttribute('collapsed', 'true');
  }
}
