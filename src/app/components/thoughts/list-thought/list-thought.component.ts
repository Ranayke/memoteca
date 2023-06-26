import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(
    private thoughtService: ThoughtService
  ) {}

  ngOnInit(): void {
    this.thoughtService.listar()
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos
      })
  }

}
