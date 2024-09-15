import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  getScript() { return localStorage.getItem('script') }

  setScript(newScript: string) { localStorage.setItem('script', newScript) }
}
