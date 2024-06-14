import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phrase-explaination',
  templateUrl: './phrase-explaination.component.html',
  styleUrls: ['./phrase-explaination.component.scss']
})
export class PhraseExplainationComponent {
  @Input() explaination: string = '';
}
