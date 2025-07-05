import { Injectable } from '@angular/core';
import { loadDicts } from './azts';
import { AzClass } from './azts';
import { DictionaryParse } from './azts/dictionaryParse';
import { Declensable } from './word';
import { prioritize } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AzService {

  constructor() { }

  loadThen(then: (initialized: AzClass) => any) {
    loadDicts('isv', (e) => {
      let az = new AzClass().init(e);
      return then(az);
    });
  }

  inflectNoun(
    az: AzClass,
    word: string,
    disambig: {
      pos?: string,
      gend?: string,
      nmbr?: string
    },
    target: {
      CAse: string,
      NMbr: string
    },
  ) {
    console.log({word});
    console.log({az});
    const morphs: DictionaryParse[] = az.morph(word);
    console.log({morphs});

    let declensable: false | Declensable = prioritize(morphs, disambig);
    if (declensable === false) return false;

    let inflected: Declensable | false = declensable.inflectCN(target);
    if (inflected === false) return false;

    return inflected
  }
}
