import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NpdfServiceService {
  constructor(public filePath:string) {
  }

  public async load() {

  }
}
