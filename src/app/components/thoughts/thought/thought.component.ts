import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Ranayke',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(
    private thoughtService: ThoughtService
  ) {}

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    } else {
      return 'ativo'
    }
  }

  atualizarFavoritos() {
    this.thoughtService.mudarFavorito(this.pensamento)
      .subscribe();
  }

}
