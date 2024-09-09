import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desaturation-slider',
  templateUrl: './desaturation-slider.component.html',
  styleUrl: './desaturation-slider.component.scss'
})
export class DesaturationSliderComponent {

  constructor() { }

  ngOnInit() {
    this.value = +(localStorage.getItem('desaturation') || '100');
    console.log(this.value);
    this.updateUI(this.value);
  }

  updateUI(value: number) {
    document.documentElement.style.filter = `
      saturate(${value}%)
      brightness(${152 - (16.44 * (Math.pow(value, 1/4)))}%)
    `;
  }

  value: number = 100;

  handler(range: HTMLInputElement) {
    this.value = +range.value;
    localStorage.setItem('desaturation', `${this.value}`);
    this.updateUI(this.value);
    console.log(this.value);
  }
}
