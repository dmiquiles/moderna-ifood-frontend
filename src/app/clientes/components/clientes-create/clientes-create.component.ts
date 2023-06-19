import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.scss']
})
export class ClientesCreateComponent {

  qualquercoisa = 'Salvar';

  constructor(
    private clienteService: ClientesService,
    private router: Router
  ){}

  criar(cliente: Cliente) {
    this.clienteService.criar(cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
    })
  }

}
