import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  private name: string;
  constructor() {
    this.name = '<empty name>';
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }


}
