import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
}
