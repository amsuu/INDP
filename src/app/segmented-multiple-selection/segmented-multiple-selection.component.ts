import { AfterViewInit, Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-segmented-multiple-selection',
  templateUrl: './segmented-multiple-selection.component.html',
  styleUrls: ['./segmented-multiple-selection.component.scss']
})
export class SegmentedMultipleSelectionComponent {
  @Input() options = [{name: '', status: false}];
  @Input({ required: true }) localStorageReference = '';

  constructor (private elementRef: ElementRef) {}

  ngOnInit() {
    if (localStorage.getItem(this.localStorageReference)) {
      let localStorageStatuses = JSON.parse(localStorage.getItem(this.localStorageReference) || "");

      for (let i = 0; i < localStorageStatuses.length; i++) {
        this.options[i].status = localStorageStatuses[i];
      }
    }
  }

  ngAfterViewInit() {
    let optionButtons = (this.elementRef.nativeElement
    .querySelector('.segmented-multiple-selection') as HTMLDivElement).children;
  
    for(let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener('click', this.changeSelection.bind(this));
    }
  }

  changeSelection() {

    let json = [];
    
    for (let i = 0; i < this.options.length; i++) {
      json.push(this.options[i].status);
    }

    localStorage.setItem(this.localStorageReference, JSON.stringify(json));
  }
}
