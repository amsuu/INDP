import { AfterViewInit, Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-segmented-single-selection',
  templateUrl: './segmented-single-selection.component.html',
  styleUrls: ['./segmented-single-selection.component.scss']
})
export class SegmentedSingleSelectionComponent {
  @Input() public options = [''];
  @Input() public localizations = [''];
  @Input() public selection = 0;
  @Input({ required: true }) public localStorageReference = '';

  constructor(private elementRef: ElementRef) {}

  // update with option already stored in local storage
  // if such value exists
  ngOnInit() {
    this.selection = +(localStorage.getItem(this.localStorageReference) || this.selection);
  }

  // add event listeners to buttons
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.segmented-single-selection')
    .addEventListener('click', this.changeSelection.bind(this));
  }

  // change visual AND localstorage AND local variable selected element
  // visual is changed by changing the variable. this is due to the
  // ngClass attribute IN THE HTML FILE being bound to the local variable
  changeSelection() {
    localStorage.setItem(this.localStorageReference, `${this.selection}`);
  }
}
