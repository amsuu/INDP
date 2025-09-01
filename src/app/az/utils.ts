import { DictionaryParse } from "./azts/dictionaryParse";
import { Declensable } from "./word";

const cases   = [ 'nomn', 'accs', 'gent', 'loct', 'datv', 'ablt', 'voct' ];  // NAGLDIV
const numbers = [ 'sing', 'plur' ];
const genders = [ 'masc', 'femn', 'neut' ];
const poss    = [ 'NOUN', 'ADJF' ];

export type Case   = 'nomn'|'accs'|'gent'|'loct'|'datv'|'ablt'|'voct';
export type Number = 'sing'|'plur';
export type Gender = 'masc'|'femn'|'neut';
export type PoS    = 'NOUN'|'ADJF';

export const names = { cases, numbers, genders, poss };


export function splitText(text: string) {
  return text.split(/[,.?!\s()\[\]{}"'-]/).filter(Boolean);
}
export function visualizeArray(arr: string[]) {
  let s = '';
  arr.forEach(el => { s += el + ',\t'; });
  s = s.slice(0, -2);
  return s;
}

export function isNounOrAdj(morph: DictionaryParse) {
  return morph.tag.POS == 'NOUN' || morph.tag.POS?.includes('ADJ');
}

/**
* Scores the morphs by how well they
* match wanted.pos, wanted.gend and wanted.nmbr,
* as well as satisfying isNounOrAdj() and not being speculative.
* Then choses the best result.
*
* @param morphs result of az.morph(token)
*/
export function prioritize(
  morphs: DictionaryParse[],
  wanted: {
    pos: string,
    gend: string,
    nmbr: string
  },
): Declensable | false {

  let scores: number[] = [ ];

  morphs.forEach((morph, index) => {
    let PoSScore  = wanted.pos  !== '' && morph.tag.ud_dict().PoS    == wanted.pos  ? 1 : 0;
    let GendScore = wanted.gend !== '' && morph.tag.ud_dict().Gender == wanted.gend ? 1 : 0;
    let NmbrScore = wanted.nmbr !== '' && morph.tag.ud_dict().Number == wanted.nmbr ? 1 : 0;

    let word = new Declensable(morph);

    scores[index] = (
      ((PoSScore + GendScore + NmbrScore)
      * (isNounOrAdj(word.morph) ? 1 : 0)  // nullifying condition
      ) + 1 - (word.speculative ? 1 : 0)  // '+1' is to avoid underflow
    );
  });

  const maxIdx = scores.indexOf(Math.max(...scores));
  let word = new Declensable(morphs[maxIdx]!);

  if (!isNounOrAdj(word.morph)) {
    //console.log('not NOUN or ADJ');
    return false;
  }

  return word
}

