import { Component } from '@angular/core';
import { NgFor, KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-on-screen-keyboard',
    standalone: true,
    styleUrl: './on-screen-keyboard.component.scss',
    imports: [NgFor, KeyValuePipe],
    templateUrl: './on-screen-keyboard.component.html'
})
export class OnScreenKeyboardComponent {

  public keepOriginalOrder = (a: any, b: any) => a.key

  orthographies = {
    "Standard Orthography": [
      ['č', 'š', 'ž', 'ě'],
    ],
    "Etymological Orthography": [
      ['å', 'ę', 'ų', 'ė', 'ȯ', 'ć', 'đ'],
      ['ĺ', 'ń', 'ŕ', 'ť', 'ď', 'ś', 'ź'],
    ],
  }

  write(value: string) {
    const destination = document.activeElement as HTMLInputElement;
    if (destination.tagName === 'INPUT') {
      destination.value += value;
    }
  }
}
