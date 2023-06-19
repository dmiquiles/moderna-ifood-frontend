import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  listarPorId(id: number) {
    return this.http.get<Cliente>('http://localhost:3000/clientes/'+ id);
  }

  listarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:3000/clientes', cliente)
  }

  deletar(id: number) {
    return this.http.delete('http://localhost:3000/clientes/' + id);
  }

  atualizar(id: number, cliente: Cliente) {
    return this.http.put<Cliente>('http://localhost:3000/clientes/' + id, cliente);
  }
  
}
