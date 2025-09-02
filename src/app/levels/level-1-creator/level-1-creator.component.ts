import { Component } from '@angular/core';
import { Declension, Disambig, QuestionFactory, Quiz } from '../level-1-types';
import { AzService } from '../../az/az.service';
import { NgFor, NgIf } from '@angular/common';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';

@Component({
  selector: 'app-level-1-creator',
  standalone: true,
  imports: [NgIf, NgFor, Level1QuizQuestionComponent],
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

  add(word: HTMLInputElement,

      disambigPoS: HTMLSelectElement,
      disambigCase: HTMLSelectElement,
      disambigNum: HTMLSelectElement,
      disambigGen: HTMLSelectElement,

      targetCase: HTMLSelectElement,
      targetNum: HTMLSelectElement,
      targetGen: HTMLSelectElement,
     ) {
       // always assume user input to be in lemma form
       let disambig: Disambig = {
         PoS: 'NOUN',
         case: 'nomn',
         number: 'sing',
       }

       if (disambigPoS.value === '') disambig.PoS    = disambigPoS.value;
       if (disambigCase.value === '')disambig.case   = disambigCase.value;
       if (disambigNum.value === '') disambig.number = disambigNum.value;
       if (disambigGen.value === '') disambig.gender = disambigGen.value;

       let target: Declension = {
         CAse: targetCase.value,
         NMbr: targetNum.value,
       };
       if (targetGen.value !== '') target.GNdr = targetGen.value

         console.table({ disambig });
         console.table({ target });

         this.azS.loadThen(az => {
           let x = QuestionFactory(az, word.value, { disambig, target, });

           if (x) this.quiz.questions.push(x);
           else alert("failed");

           word.value = "";
         });
     }

   export(author: HTMLInputElement, title: HTMLInputElement) {

     if (author.value !== '') this.quiz.author = author.value;
     if (title.value !== '') this.quiz.title = title.value;

     const json = JSON.stringify(this.quiz);
     const blob = new Blob([json], { type: 'application/json' });
     const url = URL.createObjectURL(blob);

     const a = document.createElement('a');
     a.href = url;
     a.download = `${this.quiz.author}_${this.quiz.title}.json`;
     a.click();

     URL.revokeObjectURL(url);
   }
}
