import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.thoughtService.buscarPorId(parseInt(id!))
      .subscribe((pensamento) => {
        this.pensamento = pensamento
      })
  }

  editarPensamento() {
    this.thoughtService.editar(this.pensamento)
      .subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
  }

  cancelar() {
    this.router.navigate(['/list-thought'])
  }

}
