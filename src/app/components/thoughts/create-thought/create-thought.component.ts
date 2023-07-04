import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento() {
    if(this.formulario.valid) {
      this.thoughtService.criar(this.formulario.value)
        .subscribe(() => {
          this.router.navigate(['/list-thought'])
        })
    }
  }

  cancelar() {
    this.router.navigate(['/list-thought'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
