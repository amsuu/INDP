import { Component, OnInit } from '@angular/core';
import { AzService } from '../az/az.service';
import { names, splitText, visualizeArray } from '../az/utils';

@Component({
  selector: 'app-declensor',
  standalone: true,
  imports: [],
  templateUrl: './declensor.component.html',
  styleUrl: './declensor.component.scss'
})
export class DeclensorComponent implements OnInit {

  constructor(private azS: AzService) { }

  addLi(txt: string) {
    const ul = document.querySelector('ul#info');
    const li = document.createElement('li');
    li.innerText = txt;
    ul?.appendChild(li);
  }
  outputP(txt: string) {
    const p = document.querySelector('p#out') as HTMLParagraphElement;
    p.innerText = txt;
  }

  ngOnInit() {

    this.addLi('PoS: ' + visualizeArray(names.poss));
    this.addLi('Case: ' + visualizeArray(names.cases));
    this.addLi('Gender: ' + visualizeArray(names.genders));
    this.addLi('Number: ' + visualizeArray(names.numbers));

  }

  getTable(word: HTMLInputElement,
           disambigPoS: HTMLSelectElement,
           disambigGen: HTMLSelectElement,
           disambigNum: HTMLSelectElement,
           targetCase: HTMLSelectElement,
           targetGen: HTMLSelectElement,
           targetNum: HTMLSelectElement,
  )
  {
    let disambig = {
      pos: disambigPoS.value,
      gend: disambigGen.value,
      nmbr: disambigNum.value,
    };
    console.table(disambig);
    let target = {
      CAse: targetCase.value,
      GNdr: targetGen.value,
      NMbr: targetNum.value,
    };
    console.table(target);
    this.azS.loadThen((az) => {

      let infl = this.azS.inflectNoun(az, word.value, disambig, target);

      this.outputP(infl ? infl.word : 'Unable to declense -- please check spelling or add disambiguation');
    });
  }
}
