import { Component } from '@angular/core';
import { Declension, Disambig, QuestionFactory, Quiz } from '../level-1-types';
import { AzService } from '../../az/az.service';
import { NgFor } from '@angular/common';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';

@Component({
  selector: 'app-level-1-creator',
  standalone: true,
  imports: [NgFor, Level1QuizQuestionComponent],
  templateUrl: './level-1-creator.component.html',
  styleUrl: './level-1-creator.component.scss'
})
export class Level1CreatorComponent {
  quiz: Quiz = {
    author: "unknown",
    title: "unknown",
    questions: []
  };

  constructor(private azS: AzService) { }

  add(word: string,
     disambigPoS: HTMLSelectElement,
     disambigGen: HTMLSelectElement,
     disambigNum: HTMLSelectElement,

     targetCase: HTMLSelectElement,
     targetGen: HTMLSelectElement,
     targetNum: HTMLSelectElement,
   ) {

     let disambig: Disambig = { case: 'nomn', }
     if (disambigPoS.value === '') disambig.PoS    = disambigPoS.value;
     if (disambigGen.value === '') disambig.gender = disambigGen.value;
     if (disambigNum.value === '') disambig.number = disambigNum.value;

     let target: Declension = {
       CAse: targetCase.value,
       NMbr: targetNum.value,
     };
     if (targetGen.value !== '') target.GNdr = targetGen.value

     this.azS.loadThen(az => {
       let x = QuestionFactory(az, word, { disambig, target, });

       if (x) this.quiz.questions.push(x);
       else console.error('failed');

       console.log(this.quiz);
     });
   }
}
