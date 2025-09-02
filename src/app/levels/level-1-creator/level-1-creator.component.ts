import { Component } from '@angular/core';
import { QuestionFactory, Quiz } from '../level-1-types';
import { AzService } from '../../az/az.service';

@Component({
  selector: 'app-level-1-creator',
  standalone: true,
  imports: [],
  templateUrl: './level-1-creator.component.html',
  styleUrl: './level-1-creator.component.scss'
})
export class Level1CreatorComponent {

  constructor(private azS: AzService) { }

  cl() {

    this.azS.loadThen(az => {
      let quiz: Quiz = {
        author: "amsuu",
        title: "test",
        questions: [

        ]
      }

      let x = QuestionFactory(az, 'brat', {
        disambig: { PoS: 'NOUN', case: 'nomn', number: 'sing' },
        target: { CAse: 'datv', NMbr: 'sing' }
      })
      if (x) quiz.questions.push(x);

      console.log(quiz);
    });
  }
}
