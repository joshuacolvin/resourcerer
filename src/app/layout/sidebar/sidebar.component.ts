import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title: string = 'Tags';
  tags: Array<string> = ['JavaScript', 'JS', 'ES6', 'ES2015', 'React', 'Golang', 'Python', 'Ruby', 'Django', 'Ruby on Rails'];

  constructor() { }

  ngOnInit() {
  }

}
