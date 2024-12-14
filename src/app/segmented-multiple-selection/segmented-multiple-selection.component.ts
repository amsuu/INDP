import { AfterViewInit, Component, Input } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-segmented-multiple-selection',
    templateUrl: './segmented-multiple-selection.component.html',
    styleUrls: ['./segmented-multiple-selection.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class SegmentedMultipleSelectionComponent {
  @Input() options = [{name: '', status: false}];
  @Input({ required: true }) localStorageReference = '';


  // update with options already stored in local storage
  // if such values exist
  //
  // otherwise create local storage reference
  // with default selection
  ngOnInit() {
    if (localStorage.getItem(this.localStorageReference)) {
      let localStorageStatuses = JSON.parse(
        localStorage.getItem(this.localStorageReference) || ""
      );

      for (let i = 0; i < localStorageStatuses.length; i++) {
        this.options[i].status = localStorageStatuses[i];
      }
    }
    this.updateSelection();
  }

  // syncs var selection and localStorage
  updateSelection() {
    let optionStatuses = [];
    for (let i = 0; i < this.options.length; i++) {
      optionStatuses.push(this.options[i].status);
    }

    localStorage.setItem(this.localStorageReference, JSON.stringify(optionStatuses));
  }

  // updates var selection and syncs them with localStorage
  changeSelection(i: number = -1) {
    if (i >= 0) {
      this.options[i].status = ! this.options[i].status
    }

    this.updateSelection();
  }
}
