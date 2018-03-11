import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors : string[];
  constructor() { }

  ngOnInit() {
    let service = new AuthorsService();
    this.authors = service.getAuthors();
  }

}
