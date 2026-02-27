export type Disambig = {
  PoS?: string,
  gender?: string,
  number?: string,
  case?: string,
  animacy?: string,
};
export type Declension = {
    CAse: string,
    NMbr: string,
    GNdr?: string,  // only for adj.
    Animacy?: string,
};
export type DeclensedWord = {
  word: string;
  disambig: Disambig;
  target: Declension;  // used for hint as well
};
