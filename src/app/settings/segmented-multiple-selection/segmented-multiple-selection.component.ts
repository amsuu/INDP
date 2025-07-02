import { Component, input, model, OnInit } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

type Option = {
  name: string,
  status: boolean,
};

@Component({
    selector: 'app-segmented-multiple-selection',
    templateUrl: './segmented-multiple-selection.component.html',
    styleUrls: ['./segmented-multiple-selection.component.scss'],
    standalone: true,
    imports: [NgFor, NgClass]
})
export class SegmentedMultipleSelectionComponent implements OnInit {

  options = model<Option[]>([{name: '', status: false}]);
  localStorageReference = input.required<string>();


  // update with options already stored in local storage
  // if such values exist
  //
  // otherwise create local storage reference
  // with default selection
  ngOnInit() {
    this.checkAlreadySaved();
    this.updateSelection();
  }

  checkAlreadySaved() {
    let savedStatuses: any[] = JSON.parse(localStorage.getItem(this.localStorageReference()) || "[]");

    if (savedStatuses.length > 0) {
      this.options.update(opts => opts.map((opt, i) => {
          return savedStatuses[i]
            ? {...opt, status: savedStatuses[i] }
            : opt;
        })
      );
    }
  }

  // syncs var selection and localStorage
  updateSelection() {
    let statuses: boolean[] = this.options().map(opt => opt.status);
    localStorage.setItem(this.localStorageReference(), JSON.stringify(statuses));
  }

  // updates var selection and syncs them with localStorage
  changeSelection(i: number = -1) {
    if (i >= 0) {
      this.options.update(opts => opts.map((opt, index) =>
          index == i ? {...opt, status: !(opt.status) } : opt
      ));
    }

    this.updateSelection();
  }
}
