import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, firstValueFrom } from 'rxjs';

export type Slovnik = {
  // data===========||
  // words========||||
  //              \/\/
  wordList: string[][],
  searchIndex: {
    "isv-src": string[][][],
    isv: string[][][],
    en: string[][][],
    ru: string[][][],
    be: string[][][],
    uk: string[][][],
    pl: string[][][],
    cs: string[][][],
    sk: string[][][],
    sl: string[][][],
    hr: string[][][],
    sr: string[][][],
    mk: string[][][],
    bg: string[][][],
    //        /\/\/\
    //        ||||||
    // words ==|||||
    // id&data ==|||
    // data========|
  }
}

@Injectable({
  providedIn: 'root',
})
export class SlovnikService {

  private slovnikURL = 'https://interslavic-dictionary.com/data/basic.json';
  private SLOVNIK: Slovnik | null = null;
  private headers = {
    id: 0,
    isv: 1,
    addition: 2,
    partOfSpeech: 3,
    en: 4,
    ru: 5,
    be: 6,
    uk: 7,
    pl: 8,
    cs: 9,
    sk: 10,
    sl: 11,
    hr: 12,
    sr: 13,
    mk: 14,
    bg: 15,
    intelligibility: 16,
  }

  constructor(private http: HttpClient) { }

  private getObservableSlovnik(): Observable<Slovnik> {
    return this.http.get<Slovnik>(this.slovnikURL);
  }

  public async getSlovnik(): Promise<Slovnik | null> {
    if (this.SLOVNIK === null) {
      this.SLOVNIK = await firstValueFrom(this.getObservableSlovnik());
      return this.SLOVNIK;
    } else {
      return this.SLOVNIK;
    }
  }

  private randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // O(n)
  private slowStrSearch(arr: string[], match: string) {
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (elem === match) {
        return elem;
      }
    }
    return null;
  }

  public getRandomWord() {
    if (this.SLOVNIK) {
      let rndm = this.randomInt(0, this.SLOVNIK.wordList.length);
      return this.SLOVNIK.wordList[rndm][this.headers.isv];
    } else {
      return null;
    }
  }
}
