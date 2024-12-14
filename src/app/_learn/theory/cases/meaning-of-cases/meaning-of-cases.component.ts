import { Component } from '@angular/core';
import { LearnPageTemplateComponent } from '../../../../learn-page-template/learn-page-template.component';
import { PhraseWithMoreInfoComponent } from '../../../../phrase-with-more-info/phrase-with-more-info.component';
import { PhraseExplainationComponent } from '../../../../phrase-explaination/phrase-explaination.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-meaning-of-cases',
    templateUrl: './meaning-of-cases.component.html',
    styleUrls: ['./meaning-of-cases.component.scss'],
    standalone: true,
    imports: [
        LearnPageTemplateComponent,
        PhraseWithMoreInfoComponent,
        PhraseExplainationComponent,
        RouterLink,
    ],
})
export class _Component {

}
