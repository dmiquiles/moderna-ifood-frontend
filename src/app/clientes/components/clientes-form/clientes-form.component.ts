import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent {

  form: FormGroup;
  @Input() btnText: string;
  @Output() submit: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required] ],
      email: ['', [Validators.required, Validators.email]],
      documento: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      
      contato: this.formBuilder.group({
        ddd: [''],
        telefone: ['']
      }),

      endereco: this.formBuilder.group({
        rua: [''],
        numero: [''],
        cep: [''],
        bairro: [''],
        cidade: [''],
        uf: ['']
      })
    })

    this.btnText = '';
  }

  onCancel(): void {
    this.router.navigate(['/clientes']);
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }

}
