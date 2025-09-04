import { Component } from '@angular/core';
import { Declension, Disambig, QuestionFactory, Quiz } from '../level-1-types';
import { AzService } from '../../az/az.service';
import { NgFor, NgIf } from '@angular/common';
import { Level1QuizQuestionComponent } from '../level-1-quiz-question/level-1-quiz-question.component';
import { SegmentedSingleSelectionComponent } from '../../settings/segmented-single-selection/segmented-single-selection.component';
import { cases, numbers } from '../../az/utils';

const disgen = ['', 'masc', 'femn', 'neut'];
const tarnum = [...numbers];
const tarcas = [...cases];

@Component({
  selector: 'app-level-1-creator',
  standalone: true,
  imports: [NgIf, NgFor, Level1QuizQuestionComponent, SegmentedSingleSelectionComponent],
  templateUrl: './level-1-creator.component.html',
  styleUrl: './level-1-creator.component.scss'
})
export class Level1CreatorComponent {
  protected disgenSelection = 0;
  protected tarnumSelection = 0;
  protected tarcasSelection = 0;
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
     if (disgen[this.disgenSelection] === '') disambig.gender = disgen[this.disgenSelection];

     let target: Declension = {
       CAse: tarcas[this.tarcasSelection],
       NMbr: tarnum[this.tarnumSelection],
     };
     if (targetGen.value !== '') target.GNdr = targetGen.value

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
