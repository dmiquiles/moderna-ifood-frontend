import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.scss']
})
export class ClientesReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'email', 'dataNascimento', 'acoes'];
  dataSource: Cliente[];

  constructor(private clienteService: ClientesService) {
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.clienteService.listarTodos().subscribe(
      (cliente) => this.dataSource = cliente,
      (erro) => console.log('O erro foi: ', erro),
    )
  }

  deletar(id: number) {
    this.clienteService.deletar(id).subscribe(() => {
      this.listarTodos();
    })
  }
}
