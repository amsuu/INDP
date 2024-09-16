import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-on-screen-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './on-screen-keyboard.component.html',
  styleUrl: './on-screen-keyboard.component.scss'
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
