import { Disambig } from "../levels/level-types";
import { DictionaryParse } from "./azts/dictionaryParse";
import { Declensable } from "./word";

// Hint: look at `interface UdDictResult`
export const cases   = [ 'nomn', 'accs', 'gent', 'loct', 'datv', 'ablt', 'voct' ];  // NAGLDIV
export const numbers = [ 'sing', 'plur' ];
export const genders = [ 'masc', 'femn', 'neut' ];
export const poss    = [ 'NOUN', 'ADJF' ];
export const anims   = [ 'inan', 'anim' ];

export type Case     = 'nomn'|'accs'|'gent'|'loct'|'datv'|'ablt'|'voct';
export type Number   = 'sing'|'plur';
export type Gender   = 'masc'|'femn'|'neut';
export type PoS      = 'NOUN'|'ADJF';
export type Animacy  = 'inan'|'anim';

export const names = { cases, numbers, genders, poss, anims };


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
  wanted: Disambig
): Declensable | false {

  let scores: number[] = [ ];

  morphs.forEach((morph, index) => {
    let PoSScore  = wanted.PoS    !== '' && morph.tag.ud_dict().PoS     == wanted.PoS     ? 1 : 0;
    let GendScore = wanted.gender !== '' && morph.tag.ud_dict().Gender  == wanted.gender  ? 1 : 0;
    let NmbrScore = wanted.number !== '' && morph.tag.ud_dict().Number  == wanted.number  ? 1 : 0;
    let CaseScore = wanted.case   !== '' && morph.tag.ud_dict().Case    == wanted.case    ? 1 : 0;

    let word = new Declensable(morph);

    scores[index] = (
      ((PoSScore + GendScore + NmbrScore + CaseScore)
      * (isNounOrAdj(word.morph) ? 1 : 0)  // nullifying condition
      ) + (word.speculative ? 0 : 1)
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

