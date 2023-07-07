import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  form: FormGroup;
  @Input() btnText: string;
  @Input() cliente!: Cliente;
  @Output() submit: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.form = new FormGroup({});
    this.btnText = '';
  }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(): void {
    this.form = this.formBuilder.group({
      nome: [this.cliente ? this.cliente.nome : '', [Validators.required] ],
      email: [this.cliente ? this.cliente.email : '', [Validators.required, Validators.email]],
      documento: [this.cliente ? this.cliente.documento : '', [Validators.required]],
      dataNascimento: [this.cliente ? this.cliente.dataNascimento : '', [Validators.required]],
      
      contato: this.formBuilder.group({
        ddd: [this.cliente ? this.cliente.contato?.ddd : ''],
        telefone: [this.cliente ? this.cliente.contato?.telefone : '']
      }),

      endereco: this.formBuilder.group({
        rua: [this.cliente ? this.cliente.endereco?.rua : ''],
        numero: [this.cliente ? this.cliente.endereco?.numero : ''],
        cep: [this.cliente ? this.cliente.endereco?.cep : ''],
        bairro: [this.cliente ? this.cliente.endereco?.bairro : ''],
        cidade: [this.cliente ? this.cliente.endereco?.cidade : ''],
        uf: [this.cliente ? this.cliente.endereco?.uf : '']
      })
    })
  }

  onCancel(): void {
    this.router.navigate(['/clientes']);
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }

}
