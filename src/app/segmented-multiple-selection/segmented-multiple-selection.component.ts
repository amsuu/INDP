import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segmented-multiple-selection',
  templateUrl: './segmented-multiple-selection.component.html',
  styleUrls: ['./segmented-multiple-selection.component.scss']
})
export class SegmentedMultipleSelectionComponent {
  @Input() options = [{name: '', status: false}];
  
  constructor () {}
}
