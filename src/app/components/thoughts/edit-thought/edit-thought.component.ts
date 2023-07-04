import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.thoughtService.buscarPorId(parseInt(id!))
      .subscribe((pensamento) => {
        this.formulario = this.formBuilder.group({
          id: [pensamento.id],
          conteudo: [pensamento.conteudo, Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/)
          ])],
          autoria: [pensamento.autoria, Validators.compose([
            Validators.required,
            Validators.minLength(3)
          ])],
          modelo: [pensamento.modelo],
          favorito: [pensamento.favorito]
        })
      })
  }

  editarPensamento() {
    this.thoughtService.editar(this.formulario.value)
      .subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
  }

  cancelar() {
    this.router.navigate(['/list-thought'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }

}
