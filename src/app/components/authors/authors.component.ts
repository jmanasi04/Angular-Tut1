import { Component, OnInit } from '@angular/core';
import {AuthorsService} from "../../services/authors.service";

@Component({
  selector: 'authors',
  template: `
            <h2>{{title}}</h2>
                <ul>
                  <li *ngFor="let author of authors">
                    {{ author }}
                  </li>
                </ul>
`
})
export class AuthorsComponent implements OnInit {

  title = "List of authors";
  authors;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit(): void {
  }

}
