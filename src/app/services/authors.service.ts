import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors() {
    return ["J.K. Rowling", "Robin Cook", "Arthur C. Clarke"];
  }
}
