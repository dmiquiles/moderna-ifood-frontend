import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.scss']
})
export class ClientesUpdateComponent implements OnInit {

  cliente!: Cliente;
  id!: number;
  btnText: string;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ){
    this.btnText = 'Atualizar';
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.lerPorId(this.id);
  }

  lerPorId(id: number): void {
    this.clienteService.listarPorId(id).subscribe( cliente => {
      this.cliente = cliente;
      console.log(cliente);
    });
  }

  atualizar(cliente: Cliente): void {
    this.clienteService.atualizar(this.id, cliente).subscribe(cliente => {
      this.router.navigate(['/clientes'])
    })
  }


  

}
