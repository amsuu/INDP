import { Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-segmented-single-selection',
    templateUrl: './segmented-single-selection.component.html',
    styleUrls: ['./segmented-single-selection.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class SegmentedSingleSelectionComponent {
  @Input() public options = [''];
  @Input() public localizations = [''];
  @Input() public selection = 0;
  @Input({ required: true }) public localStorageReference = '';

  // update with option already stored in local storage
  // if such value exists
  ngOnInit() {
    this.selection = +(localStorage.getItem(this.localStorageReference) || this.selection);
    localStorage.setItem(this.localStorageReference, `${this.selection}`);
  }

  // change visual AND localstorage AND local variable selected element
  // visual is changed by changing the variable. this is due to the
  // ngClass attribute IN THE HTML FILE being bound to the local variable
  setSelection(n: number) {
    this.selection = n;
    localStorage.setItem(this.localStorageReference, `${this.selection}`);
  }
}
