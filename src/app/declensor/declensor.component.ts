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

  getTable(word: HTMLInputElement, disambig: HTMLInputElement, target: HTMLInputElement) {
    const split1 = splitText(disambig.value);
    const split2 = splitText(target.value);

    this.azS.loadThen((az) => {
      let infl = this.azS.inflectNoun(az, word.value, {
        pos: split1[0],
        gend: split1[1],
        nmbr: split1[2],
      }, {
        CAse: split2[0],
        NMbr: split2[1],
      });

      this.outputP(infl ? infl.word : 'Unable to declense -- please check spelling or add disambiguation');
    });
  }
}
