import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-phrase-with-more-info',
    templateUrl: './phrase-with-more-info.component.html',
    styleUrls: ['./phrase-with-more-info.component.scss'],
    standalone: true
})
export class PhraseWithMoreInfoComponent {
  @Input() phrase: string = '';
}
