import { DictionaryParse } from "./azts/dictionaryParse";
import { UdDictResult } from "./azts/tag";
import { isNounOrAdj } from "./utils";

export class Declensable {
  public word: string;
  public root: string;
  public morph: DictionaryParse;
  public speculative: boolean;
  public pos: UdDictResult;

  // should call isNounOrAdj();
  constructor(morph: DictionaryParse) {
    if(!isNounOrAdj(morph)) console.warn('Warning: initializing class Declensable with a non- NOUN or ADJ');

    this.word = morph.word;
    this.root = (morph.normalize(false) as DictionaryParse).word;
    this.morph = morph;
    this.pos = morph.tag.ud_dict();
    this.speculative = morph.parser !== 'Dictionary';
  }

  // inflect Case Number
  inflectCN(target: { CAse: string, NMbr: string }): Declensable | false {
    let infl: DictionaryParse | false = this.morph.inflect(target);
    return infl ? new Declensable(infl) : infl;
  }


  toString() {
    return (`${this.word} has root of the ${this.pos.PoS} '${this.root}', is in ${this.pos.Case} ${this.pos.Gender} ${this.pos.Number} ${this.speculative ? '(speculative)' : ''}`);
  }
};
