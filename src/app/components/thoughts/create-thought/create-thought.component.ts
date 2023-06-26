import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) {

  }

  ngOnInit(): void {}

  criarPensamento() {
    this.thoughtService.criar(this.pensamento)
      .subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
  }

  cancelar() {
    this.router.navigate(['/list-thought'])
  }

}
