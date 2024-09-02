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

  ngOnInit() {
    this.selection = +(localStorage.getItem(this.localStorageReference) || this.selection);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.segmented-single-selection')
    .addEventListener('click', this.changeSelection.bind(this));
  }

  changeSelection() {
    localStorage.setItem(this.localStorageReference, `${this.selection}`);
  }
  
}
