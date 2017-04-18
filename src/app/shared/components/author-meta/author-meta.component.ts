import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-meta',
  templateUrl: './author-meta.component.html',
  styleUrls: ['./author-meta.component.css']
})
export class AuthorMetaComponent {
  @Input() avatar: string;
  @Input() author: string;
  @Input() created: number;
}
