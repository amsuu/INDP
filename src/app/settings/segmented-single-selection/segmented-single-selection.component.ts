import { OnInit, Component, input, model } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-segmented-single-selection',
    templateUrl: './segmented-single-selection.component.html',
    styleUrls: ['./segmented-single-selection.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class SegmentedSingleSelectionComponent implements OnInit {
  public options = input<string[]>(['']);
  public localizations = input<string[]>(['']);
  public selection = model<number>(0);
  public localStorageReference = input<string>('');

  // update with option already stored in local storage
  // if such value exists
  ngOnInit() {
    this.checkAlreadySaved();
  }

  checkAlreadySaved() {
    if (this.localStorageReference() === '') return;
    let savedSelection = +(localStorage.getItem(this.localStorageReference()) || -1);
    this.setSelection(savedSelection != -1 ? savedSelection : this.selection());
  }

  // change visual AND localstorage AND local variable selected element
  // visual is changed by changing the variable. this is due to the
  // ngClass attribute IN THE HTML FILE being bound to the local variable
  setSelection(n: number) {
    this.selection.set(n);
    if (this.localStorageReference() === '') return;
    localStorage.setItem(this.localStorageReference(), `${this.selection()}`);
  }
}
